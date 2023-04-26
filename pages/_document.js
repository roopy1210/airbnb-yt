import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=322d26b42028e722d36053c5684e1770&libraries=services,clusterer&autoload=false"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
