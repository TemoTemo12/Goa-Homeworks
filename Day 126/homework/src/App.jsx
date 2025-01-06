import React from "react";
import "tailwindcss/tailwind.css";

function App() {
    return (
        <div className="font-sans">
            <header className="bg-gray-800 text-white py-4">
                <h1 className="text-center text-2xl">Multi-theme Websites</h1>
                <nav className="mt-2">
                    <ul className="flex justify-center space-x-6">
                        <li><a href="#blog" className="text-white hover:text-gray-400">Blog</a></li>
                        <li><a href="#mandarins" className="text-white hover:text-gray-400">Mandarins</a></li>
                        <li><a href="#goa" className="text-white hover:text-gray-400">GOA</a></li>
                        <li><a href="#favorites" className="text-white hover:text-gray-400">Favorites</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section id="blog" className="bg-gray-100 py-10">
                    <h2 className="text-center text-xl font-bold">Welcome to the Blog</h2>
                    <p className="text-center text-gray-700 mt-4">This is a space for sharing thoughts and ideas!</p>
                </section>

                <section id="mandarins" className="bg-orange-200 py-10">
                    <h2 className="text-center text-xl font-bold">All About Mandarins</h2>
                    <p className="text-center text-gray-700 mt-4">Mandarins are delicious, healthy, and full of vitamin C!</p>
                </section>

                <section id="goa" className="bg-blue-200 py-10">
                    <h2 className="text-center text-xl font-bold">About GOA</h2>
                    <p className="text-center text-gray-700 mt-4">GOA is an academy to learn design and proggraming</p>
                </section>

                <section id="favorites" className="bg-green-200 py-10">
                    <h2 className="text-center text-xl font-bold">My Favorites</h2>
                    <p className="text-center text-gray-700 mt-4">my favourites....(i have no idea)</p>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-4 mt-10">
                <p className="text-center">&copy; 2024 Multi-theme Websites. All rights reserved.  (source: wikipedia)</p>
            </footer>
        </div>
    );
}

export default App;
