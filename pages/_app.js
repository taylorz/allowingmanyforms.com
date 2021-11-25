import Head from 'next/head'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../styles/theme'

import {
  Layout
} from '../components/ui'

function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <ThemeProvider theme={theme}>

      <GlobalStyle />

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>

      <Layout>
        <Component key={router.pathname} {...pageProps} />
      </Layout>

    </ThemeProvider>
  )
}

export default App
