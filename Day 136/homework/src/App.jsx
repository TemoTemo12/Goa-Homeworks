import React from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const sections = [
  {
    id: 1,
    title: "Sea Turtles",
    description: "Dive into the world of majestic sea turtles and learn about their habitats.",
    image: "https://www.wildlifeplanet.com/wp-content/uploads/2022/05/sea-turtle-swimming.jpg",
  },
  {
    id: 2,
    title: "Tourist Agency",
    description: "Plan your dream vacation with our top-notch tourist services.",
    image: "https://media.istockphoto.com/id/1217261560/photo/landscape-with-beautiful-lake-and-mountains.jpg?s=612x612&w=0&k=20&c=_7ZoBqdn_FUBYAHXHH5A6hnqRlBB9tXwXFSwEtxolQw=",
  },
  {
    id: 3,
    title: "Gaming Store",
    description: "Explore the latest and greatest in gaming gear and consoles.",
    image: "https://cdn.wccftech.com/wp-content/uploads/2021/07/Best-PS5-Gaming-Accessories.jpg",
  },
  {
    id: 4,
    title: "Batman Universe",
    description: "Step into the dark and thrilling world of Batman.",
    image: "https://cdn.mos.cms.futurecdn.net/kkYN3fJkH3AwzPYuf2FBRE.jpg",
  },
  {
    id: 5,
    title: "Nature Exploration",
    description: "Discover the beauty and wonders of nature like never before.",
    image: "https://www.sustainablejungle.com/wp-content/uploads/2020/07/Amazing-Nature-Images.jpg",
  },
];

export default function App() {
  React.useEffect(() => {
    gsap.from(".section", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: "power4.out",
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white font-sans">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Welcome to the World of Exploration</h1>
        <p className="text-xl mt-2">Choose your adventure below!</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            className="section bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
              <p className="text-gray-300">{section.description}</p>
            </div>
          </motion.div>
        ))}
      </main>

      <footer className="text-center py-6 border-t border-gray-700">
        <p className="text-gray-500">© 2025 Exploration Hub. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
