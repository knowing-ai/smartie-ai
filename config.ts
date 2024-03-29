export const config = {
  aliPayConfig: {
    appId: '2021003192621747',
    privateKey: 'MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCMrTBIJ3AWNeYZxspUHlz4SavyBSy8pC9H5Ybhs81/DMCxhUSpYpX017Jll6JOt0AM1wMxZGt17LwezK640P+5UxuYDLO7WMsiXun/+KCFG0NLBraPVcvGw5HIuftPr/mFTcd76uiPkEPb/xN2Gg+7wiiFfuGf7tlrAbjXwy7Ho3PHj+XuEaGqeBor3elpm/bK2UnbaiH/My3akjAXDgGCGC+dxTpDzigHoxs6xKXFaF4KJ+TjNcd6inEx89CPpvsirgTKxjre08BX1fGEFGc+GZv/3ti/Ol+mLeYZX68xp2enjWrP1+i5hBpw9vwYYnwTrxxwuI75OEBgtH\/\/DlZxAgMBAAECggEAGSwYWqDr9p14ah5fMAQq4KbWJL12Tt8WMshIhXSWDejrRhixu5mPebtrCbDDc1BpHqMOyDTO4dAVrXE0xo9nYvMTGfcT5i8yUhknyAzmNEs3lGJEIovYpd1y5bcZ2B2GCatsSak0KhRHgEM5aUWqkQ9iDtkwaFzl/LbXK4yaf1BlNPt+ixEobikbJmwI0KZbKhCvteUbJM8EP4B3e7DdG+adOJ0JCwtK/iHKTZux15uSU73MauVj92LTjTTR4OpGs9WGoU0aEyO+8UdO0iw0xZCufurR3HakHbVLuFP9onOipuxzj3ALtF5jQoNH/dQylIlHFOAEI+Ooq+60BQH8AQKBgQDHVHoA37Fs83ZK/CtVuqeCrRBphFTsKdNRWdP9veM4uMgee8te357IUEyIEGFKRMdCe+m13lr9zGq5kQw4EnJT88wUDoJeXbRfyU/cX/ikcuuIF2sDZmeak0XuJ182CxUKIKUi/l5jr6hqKbDwlZdqj4hpMIZ6SX6fRqOleWLBsQKBgQC0q9QAHPFi20FDIrRnyk3Z8aXSglT/ISSMT2RB7nRmOq6LWo29nRENH8cIiV7OlVvXs4aXFs2VbJKydEEYvvRDVJmKxXuxtl6pE0nDo6kLsFzm1oBYx2y+6QFkHvpW/7r3gNuyJ4l5anm+4oQ6Pxgptaolkio+Vw5iABR6egNQwQKBgBZ6Ah/jGYCtm2MtOD28hHMJzNX5JBJVTQzZUjxEk0CsJXS6hN433RG9bEPThQT46HcovdvSLPR9fnNaVcRk4BtzXEnOsQivDE3Yx3aUI9d3VfPMoDaL75bQkIwgSG4xpbe0oqplgINBJX6DIP6f/6j2cm1aGW/kpbCUKJPaMjahAoGAFE/dHcYjPUH5LFsSfTi5V+9a/Te55pULTtr+Iot0eqnORcyAcvjdmeQgtEz9Y6xXDwEX+JSPuGTkeTuoteeB/q/cM0XQikI+kjOg72XO84l4aFtlQpXpG+2GQoNZEb7efkT2bikTw5q85UECLKo7RTUvU9oC9c9DxrDLnJlrFgECgYB6QNd/B1IBzeEbz3ZVQ28LlO6UMZDH8vhYcvUPW3nAs1TAGQijl3EdIocBxTffJpeUob6xHZroFl36gJZmQrUmAorkmUN3fPFPDTQTSdN/nczIeOqqZNujVuA1jBu29YLTOgfD7OQipuUSwK9wHybRJHmMZu6pYesy+aTWuGDS9w==',
    signType: 'RSA2',
    alipayPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAh5Ai+st1Qx1lZAtpZYP+fx+bU4kBVXXuAxgeTRd0lkTOvXssFsmOZ0ThwRSKpUbYJqvFK0CfPlsUtV5JZNjD1M3Iw6138vp6kihr5tktw654rT7FXzaTQFZtiRccNHFlDz+mQxNtFqM/8xiEJJf0aQlqR94phZqsTj0CVpT/jeACIDG4w4sntsKXjG8BFzMVihjD8MxQu4N1N4SYpKTeyXqK+C52i95mwx2BHWcyXcxpWrI2RuibPTv4x35APkx9Z/ddmZw1d6H3EwHfmsOcIPKfjQmdV2pINaxMhHyvmbQtjlJlM2RkXv3uVgtY7A/a5PAizj2HajG7g/R8e6ofVQIDAQAB',
    gateway: 'https://openapi.alipay.com/gateway.do',
  },
  aliPaySandboxConfig: {
    appId: '2021000122672078',
    privateKey: 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC6QtrZkQUpg/N0KZ6YaAzJA+lwTruami9/RtzfcYN4aAG5R0LkCLlL7Ix76LhhhUzzVjQ/lxmhmN9Gk9FFt8n67lHe9b2lOPzvA/6A2+1Y7VQOVpjqMC/KhfR9UaOFaFyDHCLnOiuqvXVlY1Aj3zVDKT/0B2W0HQns4IlLR2K+pmOVsxPW0gL5l74XRKPmlE0Rz1mXWAPMi0onmkdlVfGErm+5NBzs/Joz5JBWeUATi5IbOLk44e9vnsR/2suCDf6GmLI7D59qKB99gHtD/3O5mhWhrOQpdVAP8iV1czL7Vr7SN8Kzw0LpZ9O5qv9Gqy6j+FYqyLUNNOSOCFTKfmV1AgMBAAECggEAGoZszjEF0Cy3XeKTcFbZA0NoWhMMSm8Mto5r4/Ixa9M785u/XeQUJ0jPlNHGeDTYiYrMNAYbo1S270Ebu1b6D58iz6KlWEMuWgdylf075r8dilEww6ELHUdIUxRuOhBrpEw8eDtjfpQuhLrI7eLane7g6aqoBCdig3ZSdwL6f/XJr4DCs/nymCI1Arq2BBNB5S7eCVgefwj7jMV15fGKvoU2qO5bVHPt6hl5kMz2Wm9dvZVEpA21DviIG0kXmvSN0KblvPPwZ94jn1s83zY1wSctaVsIFJYfc7h0Eba+tVVHxjotqxFF1k2Mc0R6ASc/7NnzDKp/EEijGAy+PZyjHQKBgQDtAeNM8ly/F44YCzvoI5meQKsChMiwQMHW8QsCKzzz/4oYt4kWEYhbJ5at6ZtxT994EEQlwU0PuBZgesCShxkwQ4QP7TvM3IYw9ZvUVxu1CNQgwaIo2ITtZ18P/CNlDiPAXhPO/DZazIn0mazGlU967WlO6bJb4Gk42mmc2nMHOwKBgQDJL+2rY0ZDP/ZAgSp6kUT2gXcy4xo75cUnrcut6hnZZMa3xiU+5qpo2ZOJi8Pa55zYmOcvLQS6gPyUhThs7jl+4BFb84nHwFW4EdAS2SpgfMvPnHiFLkMxs3d31OdzaCqK7xS7Qp6vBB1Zr2yXK5rQtBDo9IQ2CzPdfq94UZ1bDwKBgFeXtAbzJ73kGbrfJAPWbGblZY5nvrgNJtamfTgO/Nb8oXAjHMIQNsHhrrmVtcI6D9ASyuzdNPrTQUnk9BjzXybMPRmZxtkew2WC0FW439+XZLa6eZD4/J+07Zg9ymMFx8bHvjBoXDpQj8fbp9Q4yIgZCCuHCUkVdi3x4sh6n7qTAoGBAJVBRWVc5QeHMD1ylf0QQMVQDwpliVTehYGGYhDIGB07smEsUv1zSwE2SUpFsit4oNfft8M79sIWZ0wX+WB265jAyqAY8SKMAgvoyyDwk4u5icqgHplPVPJOXlc8T+lCYi1oaUzzg537w3qBtmIAK36h19m7bUpazUOJdMwiYEbpAoGBAJ9YgvdPcncFLwPSwaClCuzLUm/k5sbysAv3RNmeEP6QtUc76N5wDpaoTJMcnIvqVLtX1+fkgAeYc9cVYXARAuoUYCJYh5k41qfI3aEW+l5iw86HFOQLscMJscsavPv0sINmPAPSD2T2nmLbSuNZ48kusqYvp2usqKzGJMAZ0TwD',
    signType: 'RSA2',
    alipayPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyEt1kDU1NHh8BTa59y2atyt9SJKimFuSv6Brm8HND6ArBorKJ45cpRRclDVqXQ0gabubyoKXgUem5dbhdETrjKfUMw1UERq/mmgq9Qc7FKhMX7y2fXgeAfp6PF76nRFDFR/zqsUL1fVF0X5eYCm4fJeafT2+BlIUhp5nI1d19WDCHOIAT6yHt8XR2YHVjx6+8f6s6w6H99MgDkf+nouGJhOjgCyt/10w+jBoqyhkYrMFPOsZhCKLRFDOp9L6WVCObpDWRC7HJ0P/xSt6uhw+Auv4g6/aDZy2pFhyWa7VxFFsKKgIRT/M2yXE60Nq6B3tPSuNTwifgokbAyYSMavWBQIDAQAB',
    gateway: 'https://openapi-sandbox.dl.alipaydev.com/gateway.do', // 沙箱网关
  },
  testDbConnect: {
    host: 'mysql.sqlpub.com',
    user: 'edianyun',
    password: '7c126dd1f9edb592',
    database: 'smartie',
    connectTimeout: 1000,
    connectionLimit: 10,
    multipleStatements: true,
  },
  dbConnect: {
    host: 'localhost',
    user: 'smartieai',
    password: 'Smartie!23',
    database: 'smartie',
    connectTimeout: 1000,
    connectionLimit: 10,
    multipleStatements: true,
  },
  orderConfig: {
    amount: 30.00,
    period: 365,
  },
  txVoiceConfig: {
    credential: {
      secretId: import.meta.env.TX_SECRET_ID,
      secretKey: import.meta.env.TX_SECRET_KEY,
    },
    region: "",
    profile: {
      httpProfile: {
        endpoint: "asr.tencentcloudapi.com",
      },
    },
  }
}
