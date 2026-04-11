import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Navbar from "./components/layout/navbar";
import AppShell from "./components/layout/Appshell";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const is404Page = Component.name === "Custom404";

  return (
    <SessionProvider session={session}>
      <AppShell showNavbar={!is404Page}>
        <Component {...pageProps} />
      </AppShell>
    </SessionProvider>
  );
}