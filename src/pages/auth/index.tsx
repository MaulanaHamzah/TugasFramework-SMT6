import { useRouter } from "next/router";
// import styles from "./login.module.scss";
import styles from "./login.module.scss";
import Link from "next/link";

const TampilanLogin = () => {
  const { push } = useRouter();
  const handleLogin = () => {
    push("/produk");
  };
  return (
    <div className={styles.login}>
      <h1 className="text-3xl font-bold text-blue-600">Halaman Login</h1>
      <button onClick={() => handleLogin()}>Login</button>
      <br />
      <h1
        style={{ color: "red", border: "1px solid red", borderRadius: "5px" }}
      >
        Belum punya akun
      </h1>
      <Link href={"/auth/register"}>Ke halaman register</Link>
    </div>
  );
};

export default TampilanLogin;
