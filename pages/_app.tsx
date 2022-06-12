import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="w-full max-w-xl mx-auto">
        <Component {...pageProps} />
      </div>
      {/* <Script
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_MAP_KEY}`}
      /> */}
    </>
  );
}

export default MyApp;
