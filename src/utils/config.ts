import dotenv from 'dotenv'

dotenv.config()

// Place to manage application environments and urls
const config = {
  development: {
    jsonPlaceholderUrl: 'https://jsonplaceholder.typicode.com',
  },
  production: {
    jsonPlaceholderUrl: 'https://jsonplaceholder.typicode.com',
  },
}

// Resolve the test environment. Note that environment variables are read by k6 using the '__ENV' notation
const testEnv = process.env.TEST_ENV as keyof typeof config || ('development' as keyof typeof config)

console.log(`Test will be run against ${testEnv} environment`)

export default config[testEnv]
