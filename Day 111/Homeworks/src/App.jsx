import React, { useState } from "react";
import Counter from "./components/Counter";
import WhalePage from "./components/WhalePage";
import ProductList from "./components/ProductList";
import SidebarHeader from "./components/SidebarHeader";
import ResponsivePage from "./components/ResponsivePage";

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case "counter":
        return <Counter />;
      case "whale":
        return <WhalePage />;
      case "products":
        return <ProductList />;
      case "sidebar":
        return <SidebarHeader />;
      case "responsive":
        return <ResponsivePage />;
      default:
        return <p className="text-lg text-gray-700">Choose a section to display.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">My Projects</h1>
      <nav className="mb-6 flex flex-wrap justify-center">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-md m-2 w-full max-w-xs sm:w-auto hover:bg-blue-600 transition"
          onClick={() => setActiveComponent("counter")}
        >
          Counter
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-md m-2 w-full max-w-xs sm:w-auto hover:bg-blue-600 transition"
          onClick={() => setActiveComponent("whale")}
        >
          Whale
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-md m-2 w-full max-w-xs sm:w-auto hover:bg-blue-600 transition"
          onClick={() => setActiveComponent("products")}
        >
          Products
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-md m-2 w-full max-w-xs sm:w-auto hover:bg-blue-600 transition"
          onClick={() => setActiveComponent("sidebar")}
        >
          Sidebar
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-md m-2 w-full max-w-xs sm:w-auto hover:bg-blue-600 transition"
          onClick={() => setActiveComponent("responsive")}
        >
          Responsive
        </button>
      </nav>
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;
