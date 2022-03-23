import "nextra-theme-docs/style.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return <Component {...pageProps} />;
}
