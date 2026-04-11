import DetailProduk from "../../views/DetailProduct";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const HalamanProduk = ({ product }: { product: ProductType }) => {
  // digunakan client-side rendering
  // const { query, isReady } = useRouter();
  // const { data, error, isLoading } = useSWR(
  //   isReady && query.produk ? `/api/produk/${query.produk}` : null,
  //   fetcher
  // );
  // if (!isReady) return <div>Loading...</div>;
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error!</div>;
  // if (!data?.data) return <div>Data tidak ditemukan</div>;

  return (
    <div>
      <DetailProduk products={product} />
    </div>
  );
};

export default HalamanProduk;

// digunakan server-side rendering
// export async function getServerSideProps({ params }: { params: { produk: string } }) {
//   const res = await fetch(`http://localhost:3000/api/produk/${params.produk}`);
//   const respone = await res.json();
//   return {
//     props: {
//       product: respone.data,
//     },
//   };
// }

// digunakan static-site generation
export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/produk");
  const response = await res.json();
  const paths = response.data.map((product: ProductType) => ({
    params: { produk: product.id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { produk: string } }) {
  const res = await fetch(`http://localhost:3000/api/produk/${params.produk}`);
  const response: { data: ProductType } = await res.json();
  return {
    props: {
      product: response.data,
    },
  };
}