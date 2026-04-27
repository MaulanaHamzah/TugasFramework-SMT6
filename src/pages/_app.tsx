import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppShell from "./components/layout/Appshell";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const is404Page = Component.name === "Custom404";

  return (
    <SessionProvider session={session}>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      <AppShell showNavbar={!is404Page}>
        <Component {...pageProps} />
      </AppShell>
    </SessionProvider>
  );
}
