import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/theme";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import { Layout } from "../components/ui";

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>

      <GlobalStyle />

      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Layout>
            <Component key={router.pathname} {...pageProps} />
          </Layout>
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
