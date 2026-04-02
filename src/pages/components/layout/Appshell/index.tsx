import { useRouter } from "next/router";
import Navbar from "../navbar";
import Footer from "../footer";

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

type AppShellProps = {
  children: React.ReactNode;
  showNavbar?: boolean;
};

const AppShell = (props: AppShellProps) => {
  const { children, showNavbar = true } = props;
  const { pathname } = useRouter();
  const shouldShowNavbar = showNavbar && !disableNavbar.includes(pathname);

  return (
    <main>
      {shouldShowNavbar && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
