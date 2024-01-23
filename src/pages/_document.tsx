import { Metadata } from "next";
import { Html, Head, Main, NextScript } from "next/document";

export const metadata: Metadata = {
  title: "Alisherov Sadulla",
  description: "Portfolio of Alisherov Sadulla",
  icons: {
    icon: "/favicon.png",
  },
};

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
