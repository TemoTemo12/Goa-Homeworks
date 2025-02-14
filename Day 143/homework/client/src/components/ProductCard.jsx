export default function ProductCard({ product }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-500">{product.category}</p>
        <p className="text-lg font-bold">${product.price}</p>
      </div>
    );
  }
  