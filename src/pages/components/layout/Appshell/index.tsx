import { useRouter } from "next/router";
import Navbar from "../navbar";
import Footer from "../footer";
import { Roboto } from "next/font/google";

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

type AppShellProps = {
  children: React.ReactNode;
  showNavbar?: boolean;
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const AppShell = (props: AppShellProps) => {
  const { children, showNavbar = true } = props;
  const { pathname } = useRouter();
  const shouldShowNavbar = showNavbar && !disableNavbar.includes(pathname);

  return (
    <main className={roboto.className}>
      {shouldShowNavbar && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
