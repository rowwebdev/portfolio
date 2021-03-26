import Head from "next/head";
import React, { useState } from "react";

import ThemeContext from "../context/theme-context";
import Theme from "../components/Theme";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [themeId, setThemeId] = useState(1);

  const switchTheme = (id) => {
    setThemeId(id);
  };

  return (
    <ThemeContext.Provider value={{ themeId, switchTheme }}>
      <Head>
        <title>Rowan Lawrence</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Yrsa:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
      </Head>
      <Theme themeId={themeId} />
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
