import type { AppProps /* , AppContext */ } from "next/app";
import { ThemeProvider } from "styled-components";

import defaultTheme from "#/styles/themes/default";
import GlobalStyles from "#/styles/global";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default MyApp;
