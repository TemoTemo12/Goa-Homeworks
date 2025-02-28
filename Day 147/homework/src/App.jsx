import { useState, useEffect } from "react";

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [formData, setFormData] = useState(JSON.parse(localStorage.getItem("formData")) || { name: "", email: "" });
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [lastPage, setLastPage] = useState(localStorage.getItem("lastPage") || "home");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("lastPage", lastPage);
  }, [theme, todos, formData, cart, lastPage]);

  return (
    <div className={`min-h-screen p-4 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <h1 className="text-xl font-bold">React LocalStorage App</h1>

      {/* Theme Toggle */}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="mt-4 p-2 border rounded">
        Toggle Theme
      </button>

      {/* Todo List */}
      <div className="mt-4">
        <input id="todoInput" type="text" placeholder="Add a todo" className="p-2 border rounded mr-2" />
        <button onClick={() => {
          const input = document.getElementById("todoInput");
          if (input.value) setTodos([...todos, { text: input.value, done: false }]);
          input.value = "";
        }} className="p-2 bg-blue-500 text-white rounded">Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="flex items-center gap-2 mt-2">
              <input type="checkbox" checked={todo.done} onChange={() => {
                const newTodos = [...todos];
                newTodos[index].done = !newTodos[index].done;
                setTodos(newTodos);
              }} />
              <span className={todo.done ? "line-through" : ""}>{todo.text}</span>
              <button onClick={() => setTodos(todos.filter((_, i) => i !== index))} className="ml-auto text-red-500">X</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Form */}
      <div className="mt-4">
        <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="p-2 border rounded mr-2" />
        <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="p-2 border rounded" />
      </div>

      {/* Cart */}
      <div className="mt-4">
        <button onClick={() => setCart([...cart, { name: "Product " + (cart.length + 1) }])} className="p-2 bg-green-500 text-white rounded">
          Add to Cart
        </button>
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="mt-2">{item.name}</li>
          ))}
        </ul>
      </div>

      {/* Last Page Navigation */}
      <div className="mt-4">
        <button onClick={() => setLastPage("home")} className="p-2 bg-gray-500 text-white rounded mr-2">Home</button>
        <button onClick={() => setLastPage("about")} className="p-2 bg-gray-500 text-white rounded">About</button>
        <p className="mt-2">Last visited: {lastPage}</p>
      </div>
    </div>
  );
}