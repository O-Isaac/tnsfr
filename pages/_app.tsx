import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import RootLayour from './_layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayour>
      <Component {...pageProps} />
    </RootLayour>
  )
}
