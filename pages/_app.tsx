import "@/styles/globals.css";
import type { AppProps } from "next/app";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { Rajdhani } from "next/font/google";
import { Vina_Sans } from "next/font/google";

const rajdhani = Rajdhani({
  weight: "400",
  subsets: ["latin"],
});

export const vina = Vina_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={rajdhani.className}>
      <Component {...pageProps} />
    </main>
  );
}
