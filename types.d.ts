declare namespace NodeJS {
  interface ProcessEnv {
    // Additional environment variables
    ENCRYPT_SECRET: string
    NEXT_PUBLIC_APP_NAME: string
    NEXT_PUBLIC_APP_URL: string
  }
}

type $TsFixMe = any
