import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";

import getTheme from "@/Theme/theme";
import createEmotionCache from "@/helpers/createEmotionCache";
import ThemeChange from "@/context/ThemeContext";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [mode, setMode] = React.useState("light");
  React.useEffect(() => {
    const oldMode =
      localStorage.getItem("theme") !== null
        ? localStorage.getItem("theme")
        : "light";
    setMode(oldMode);
  }, []);
  const changeTheme = () => {
    let ThemeMode = mode === "light" ? "dark" : "light";
    setMode(ThemeMode);
    localStorage.setItem("theme", ThemeMode);
  };
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={getTheme(mode)}>
        <ThemeChange.Provider value={changeTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeChange.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
