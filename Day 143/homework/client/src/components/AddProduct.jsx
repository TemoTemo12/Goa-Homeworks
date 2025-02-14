import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const product = { name, category, price };

    const res = await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    const data = await res.json();

    if (res.ok) {
      navigate("/");
    } else {
      setError(data.error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add Product</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full p-2 border rounded" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input className="w-full p-2 border rounded" type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
        <input className="w-full p-2 border rounded" type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
      </form>
    </div>
  );
}
