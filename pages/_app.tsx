import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "@styles/theme";
import createEmotionCache from "@utils/createEmotionCache";
import "@styles/globals.css";
import Layout from "@components/layout";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

function MyApp(props: MyAppProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
