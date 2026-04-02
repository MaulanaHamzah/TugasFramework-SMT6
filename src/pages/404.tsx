import Link from "next/link";
import Head from "next/head";
import styles from "@/styles/404.module.scss";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
        <meta
          name="description"
          content="Halaman yang Anda cari tidak ditemukan"
        />
      </Head>
      <div className={styles.error}>
        <img src="/404.png" alt="404 Error" className={styles.error__image} />
        <h1 className={styles.error__title}>404</h1>
        <h2 className={styles.error__subtitle}>Halaman Tidak Ditemukan</h2>
        <p className={styles.error__description}>
          Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
        </p>
        <Link href="/" className={styles.error__button}>
          Kembali ke Home
        </Link>
      </div>
    </>
  );
};

export default Custom404;
