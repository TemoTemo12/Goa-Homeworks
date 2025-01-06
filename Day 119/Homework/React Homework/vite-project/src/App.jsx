import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
