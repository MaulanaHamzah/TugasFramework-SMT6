import TampilanProduk from "../../views/produk";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const halamanProdukStatic = ({ products }: { products: ProductType[] }) => {
  return (
    <div>
      <h1>Halaman Produk Static</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export default halamanProdukStatic;

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:3000/api/produk");
  const response: { data: ProductType[] } = await res.json();

  // console.log("Data produk yang diambil dari API:", response);
  return {
    props: {
      products: response.data,
    },
    revalidate: 10,
  };
}