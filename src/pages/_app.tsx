import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Navbar from "./components/layout/navbar";
import AppShell from "./components/layout/Appshell";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const is404Page = Component.name === "Custom404";
  const { children } = pageProps;

  return (
    <AppShell showNavbar={!is404Page}>
      <Component {...pageProps} />
    </AppShell>
  );
}
