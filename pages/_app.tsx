import type { AppProps } from "next/app";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme, { themeDark } from "@styles/theme";
import createEmotionCache from "@utils/createEmotionCache";
import "@styles/globals.css";
import Layout from "@components/layout";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

function MyApp(props: MyAppProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  const [mode, setMode] = useState<boolean>(false);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={mode ? theme : themeDark}>
        <CssBaseline />
        <RecoilRoot>
          <Layout onChangeTheme={() => setMode(prev => !prev)}>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
