import "@/styles/globals.scss";
import i18next from "i18next";
import type { AppProps } from "next/app";
import { initReactI18next } from "react-i18next";

export default function App({ Component, pageProps }: AppProps) {
  i18next.use(initReactI18next).init({
    lng: "vi",
    resources: {
      en: {
        translation: require("/locales/en.json"),
      },
      vi: {
        translation: require("/locales/vi.json"),
      },
    },
  });
  return <Component {...pageProps} />;
}

