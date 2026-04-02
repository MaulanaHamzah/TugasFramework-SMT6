import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Nama: Rayhan Heru Arifiansyah</h1>
      <br />
      <p>NIM: 2341720086</p>
      <br />
      <p>Prodi: D4 Teknik Informatika</p>
    </div>
  );
}
