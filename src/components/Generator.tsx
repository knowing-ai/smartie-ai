import { Index, Show, createSignal, lazy, onCleanup, onMount } from 'solid-js'
import { useThrottleFn } from 'solidjs-use'
import { generateSignature } from '@/utils/auth'
import IconClear from './icons/Clear'
import IconSend from './icons/Send'
// import MessageItem from './MessageItem'
import SystemRoleSettings from './SystemRoleSettings'
import ErrorMessageItem from './ErrorMessageItem'
import Voice from './Voice'
import type { ChatMessage, ErrorMessage } from '@/types'
import speakImg from '../../public/speak.png';
import closeImg from '../../public/close.png';

import Recorder from 'recorder-core'
//引入mp3格式支持文件；如果需要多个格式支持，把这些格式的编码引擎js文件放到后面统统引入进来即可
import 'recorder-core/src/engine/mp3'
import 'recorder-core/src/engine/mp3-engine'

export default () => {
  let inputRef: HTMLTextAreaElement
  const [currentSystemRoleSettings, setCurrentSystemRoleSettings] = createSignal('')
  const [systemRoleEditing, setSystemRoleEditing] = createSignal(false)
  const [messageList, setMessageList] = createSignal<ChatMessage[]>([])
  const [currentError, setCurrentError] = createSignal<ErrorMessage>()
  const [currentAssistantMessage, setCurrentAssistantMessage] = createSignal('')
  const [loading, setLoading] = createSignal(false)
  const [controller, setController] = createSignal<AbortController>(null)
  const [speakOn, setSpeakOn] = createSignal<boolean>(false) // 是否语音模式

  onMount(() => {
    try {
      if (localStorage.getItem('messageList'))
        setMessageList(JSON.parse(localStorage.getItem('messageList')))

      if (localStorage.getItem('systemRoleSettings'))
        setCurrentSystemRoleSettings(localStorage.getItem('systemRoleSettings'))
    } catch (err) {
      console.error(err)
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    window.addEventListener('contextmenu', onContextMenu)
    onCleanup(() => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      window.removeEventListener('contextmenu', onContextMenu)
    })
  })

  const onContextMenu = (e) => {
    e.preventDefault();
  }

  const handleBeforeUnload = () => {
    localStorage.setItem('messageList', JSON.stringify(messageList()))
    localStorage.setItem('systemRoleSettings', currentSystemRoleSettings())
  }

  const handleButtonClick = async() => {
    const inputValue = inputRef.value
    if (!inputValue || speakOn())
      return

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (window?.umami) umami.trackEvent('chat_generate')
    inputRef.value = ''
    setMessageList([
      ...messageList(),
      {
        role: 'user',
        content: inputValue,
      },
    ])
    requestWithLatestMessage()
  }

  const smoothToBottom = useThrottleFn(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }, 300, false, true)

  const requestWithLatestMessage = async() => {
    setLoading(true)
    setCurrentAssistantMessage('')
    setCurrentError(null)
    const storagePassword = localStorage.getItem('pass')
    try {
      const controller = new AbortController()
      setController(controller)
      const requestMessageList = [...messageList()]
      if (currentSystemRoleSettings()) {
        requestMessageList.unshift({
          role: 'system',
          content: currentSystemRoleSettings(),
        })
      }
      const timestamp = Date.now()
      const response = await fetch('/api/generate', {
        method: 'POST',
        body: JSON.stringify({
          messages: requestMessageList,
          modelType: localStorage.getItem('gpt-model') || '3.5',
          isAdmin: localStorage.getItem('isAdmin'),
          time: timestamp,
          pass: storagePassword,
          sign: await generateSignature({
            t: timestamp,
            m: requestMessageList?.[requestMessageList.length - 1]?.content || '',
          }),
        }),
        signal: controller.signal,
      })
      if (!response.ok) {
        const error = await response.json()
        console.error(error.error)
        setCurrentError(error.error)
        throw new Error('Request failed')
      }
      const data = response.body
      if (!data)
        throw new Error('No data')

      const reader = data.getReader()
      const decoder = new TextDecoder('utf-8')
      let done = false

      while (!done) {
        const { value, done: readerDone } = await reader.read()
        if (value) {
          const char = decoder.decode(value)
          if (char === '\n' && currentAssistantMessage().endsWith('\n'))
            continue

          if (char)
            setCurrentAssistantMessage(currentAssistantMessage() + char)

          smoothToBottom()
        }
        done = readerDone
      }
    } catch (e) {
      console.error(e)
      setLoading(false)
      setController(null)
      return
    }
    archiveCurrentMessage()
  }

  const archiveCurrentMessage = () => {
    if (currentAssistantMessage()) {
      setMessageList([
        ...messageList(),
        {
          role: 'assistant',
          content: currentAssistantMessage(),
        },
      ])
      setCurrentAssistantMessage('')
      setLoading(false)
      setController(null)
      inputRef.focus()
    }
  }

  const clear = () => {
    inputRef.value = ''
    inputRef.style.height = 'auto'
    setMessageList([])
    setCurrentAssistantMessage('')
    setCurrentError(null)
  }

  const stopStreamFetch = () => {
    if (controller()) {
      controller().abort()
      archiveCurrentMessage()
    }
  }

  const retryLastFetch = () => {
    if (messageList().length > 0) {
      const lastMessage = messageList()[messageList().length - 1]
      if (lastMessage.role === 'assistant')
        setMessageList(messageList().slice(0, -1))

      requestWithLatestMessage()
    }
  }

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.isComposing || e.shiftKey)
      return

    if (e.keyCode === 13) {
      e.preventDefault()
      handleButtonClick()
    }
  }

  const renderMessageResult = () => {
    const MessageItem = lazy(() => import('./MessageItem'))
    return (<MessageItem
      role="assistant"
      message={currentAssistantMessage}
            />)
  }
  const renderMessageList = () => {
    return (<div>
      <Index each={messageList()}>
        {(message, index) => {
          const MessageItem = lazy(() => import('./MessageItem'))
          return (<MessageItem
            role={message().role}
            message={message().content}
            showRetry={() => (message().role === 'assistant' && index === messageList().length - 1)}
            onRetry={retryLastFetch}
                  />)
        }}
      </Index>
      {currentAssistantMessage() && renderMessageResult()}
            </div>)
  }

  const toggleInputType = () => {
    setSpeakOn(!speakOn())
  }

  const sendVoiceMessage = (text) => {
    setMessageList([
      ...messageList(),
      {
        role: 'user',
        content: text,
      },
    ])
    requestWithLatestMessage()
  }
  return (
    <div my-6>
      <SystemRoleSettings
        canEdit={() => messageList().length === 0}
        systemRoleEditing={systemRoleEditing}
        setSystemRoleEditing={setSystemRoleEditing}
        currentSystemRoleSettings={currentSystemRoleSettings}
        setCurrentSystemRoleSettings={setCurrentSystemRoleSettings}
      />
      { renderMessageList()}
      { currentError() && <ErrorMessageItem data={currentError()} onRetry={retryLastFetch} /> }
      <Show
        when={!loading()}
        fallback={() => (
          <div class="gen-cb-wrapper">
            <span>思考中...</span>
            <div class="gen-cb-stop" onClick={stopStreamFetch}>停止</div>
          </div>
        )}
      >
        <div class="gen-text-wrapper gen-text-w-center" class:op-50={systemRoleEditing()}>
          <div class="gen-text-conent" style="margin: 0 auto">
            <img class="gen-text-speak" src={speakImg} onClick={toggleInputType}/>
            {
              speakOn() ? 
              <Voice client:only={'solid-js'} speakOn={speakOn()} sendVoiceMessage={sendVoiceMessage} setLoading={setLoading}></Voice>
              :
                <textarea
                  ref={inputRef!}
                  disabled={systemRoleEditing()}
                  onKeyDown={handleKeydown}
                  placeholder="输入内容..."
                  autocomplete="off"
                  autofocus
                  onInput={() => {
                    inputRef.style.height = 'auto'
                    inputRef.style.height = `${inputRef.scrollHeight}px`
                  }}
                  rows="1"
                  class="gen-textarea"
                />
            }
            <button onClick={handleButtonClick} disabled={systemRoleEditing()} gen-slate-btn>
              <IconSend></IconSend>
            </button>
            <button title="Clear" onClick={clear} disabled={systemRoleEditing()} gen-slate-btn>
              <IconClear />
            </button>
          </div>
        </div>
      </Show>
    </div>
  )
}
