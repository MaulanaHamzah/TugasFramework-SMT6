import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Nama: Achmad Maulana Hamzah</h1>
      <br />
      <p>NIM: 2341720172</p>
      <br />
      <p>Prodi: D4 Teknik Informatika</p>
      <br />
      <p>Tugas Framework</p>
    </div>
  );
}
