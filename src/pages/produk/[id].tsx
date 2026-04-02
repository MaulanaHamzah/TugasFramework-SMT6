import { useRouter } from "next/router";
import Link from "next/link";

const HalamanProduk = () => {
  const { query } = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-5 py-10">
        <Link
          href="/produk"
          className="text-blue-600 hover:text-blue-800 mb-5 inline-block"
        >
          ← Kembali ke Produk
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 mt-5">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Detail Produk
          </h1>

          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-6">
            <p className="text-gray-600 text-lg">Gambar Produk</p>
          </div>

          <div className="border-t border-gray-300 pt-5">
            <p className="text-lg font-semibold text-gray-700 mb-2">
              Produk ID: <span className="text-blue-600">{query.id}</span>
            </p>
            <p className="text-gray-600 mb-4">
              Deskripsi produk akan ditampilkan di sini
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold">
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalamanProduk;
