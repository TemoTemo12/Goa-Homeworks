import React from 'react';

// თავისუფალი თემის ნაწილი
const FreeTopic = () => (
    <section id="free-topic" className="p-4">
        <h2 className="text-xl font-bold">თავისუფალი თემა</h2>
        <p>ეს არის თავისუფალი თემა, სადაც შეგიძლიათ მოიპოვოთ ინფორმაცია.</p>
    </section>
);

// ზღვის კოჭების ნაწილი
const OceanCrabs = () => (
    <section id="ocean-crabs" className="p-4">
        <h2 className="text-xl font-bold">ზღვის კოჭები</h2>
        <p>ზღვის კოჭები არის საოცარი.</p>
    </section>
);

// სუპერ გმირების ნაწილი
const SuperHeroes = () => (
    <section id="super-heroes" className="p-4">
        <h2 className="text-xl font-bold">სუპერ გმირები</h2>
        <p>აქ შეგიძლიათ გაეცნოთ სუპერ გმირებს.</p>
    </section>
);

// პროდუქტების მარკირების ნაწილი
const ProductMap = () => {
    const products = [
        { id: 1, name: 'პროდუქტი 1', price: '10$' },
        { id: 2, name: 'პროდუქტი 2', price: '15$' },
        { id: 3, name: 'პროდუქტი 3', price: '20$' },
    ];

    return (
        <section id="product-map" className="p-4">
            <h2 className="text-xl font-bold">პროდუქტები</h2>
            <ul className="space-y-2">
                {products.map(product => (
                    <li key={product.id} className="border border-gray-300 p-2 bg-white">
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </section>
    );
};

// ძირითადი კომპონენტი
const Main = () => {
    return (
        <main>
            <FreeTopic />
            <OceanCrabs />
            <SuperHeroes />
            <ProductMap />
        </main>
    );
};

export default Main;
