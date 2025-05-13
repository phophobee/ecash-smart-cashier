const featureItems = [
  {
    title: "Sunshine Orange",
    description: "Dukungan barang dengan berbagai satuan (pcs, lusin, box).",
    image: "/public/images/mtcorange.png",
  },
  {
    title: "Fine Yellow",
    description: "Atur harga berdasarkan level pelanggan atau kuantitas.",
    image: "/public/images/mtcyellow.png",
  },
  {
    title: "Great Green",
    description: "Pantau ketersediaan barang secara real-time.",
    image: "/public/images/mtcgreen.png",
  },
  {
    title: "Mutual Black",
    description: "Hitung keuntungan penjualan secara otomatis.",
    image: "/public/images/mtcblack.png",
  },
  {
    title: "Nice Bomber",
    description: "Pantau pemasukan dan pengeluaran kas usaha Anda.",
    image: "/public/images/mtcbomber.png",
  },
];

export default function Slider() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-pink-800 mb-8">Produk Favourite</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featureItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl text-purple-600 font-semibold mb-2">{item.title}</h3>
              <p className="text-pink-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
