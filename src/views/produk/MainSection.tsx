const ProdukMainSection = () => {
  const produkList = [
    { id: 1, name: "Produk 1", price: "Rp 100.000" },
    { id: 2, name: "Produk 2", price: "Rp 150.000" },
    { id: 3, name: "Produk 3", price: "Rp 200.000" },
    { id: 4, name: "Produk 4", price: "Rp 250.000" },
  ];

  return (
    <div className="py-10 px-5 min-h-96">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {produkList.map((produk) => (
          <div key={produk.id} className="border border-gray-300 rounded-lg p-5 text-center shadow-md hover:shadow-xl transition-shadow cursor-pointer">
            <h3 className="mb-2 text-gray-800 font-semibold">{produk.name}</h3>
            <p className="text-xl text-blue-600 font-bold mb-2.5">
              {produk.price}
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition-colors">
              Lihat Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProdukMainSection;
