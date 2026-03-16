export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-pink-600">{product.name}</h3>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <h4 className="text-pink-500 font-semibold text-lg">{product.price}</h4>
      </div>
    </div>
  );
}
