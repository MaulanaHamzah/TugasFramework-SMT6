import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProdukHeroSection from "@/views/produk/HeroSection";
import ProdukMainSection from "@/views/produk/MainSection";

type ProductType = {
  id: string;
  nama: string;
  harga: number;
  ukuran: string;
  warna: string;
};

const kategori = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // const { push } = useRouter();
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   // Cek apakah ada token di localStorage
  //   const token = localStorage.getItem("token");

  //   if (!token) {
  //     push("/auth/login");
  //   } else {
  //     setIsLogin(true);
  //   }
  // }, [push]);

  useEffect(() => {
    fetch("/api/produk")
      .then((responseData) => responseData.json())
      .then((responseData) => {
        setProducts(responseData.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <h1>Daftar Produk</h1>
      {products.map((product: ProductType) => (
        <div key={product.id}>
          <h2>{product.nama}</h2>
          <p>Harga: Rp {product.harga.toLocaleString()}</p>
          <p>Ukuran: {product.ukuran}</p>
          <p>Warna: {product.warna}</p>
        </div>
      ))}
    </div>
  );
};

export default kategori;
