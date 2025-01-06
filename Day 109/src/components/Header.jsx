import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-800 p-4">
            <h1 className="text-white text-2xl">Random ვებსაიტი</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a className="text-white hover:underline" href="#free-topic">თავისუფალი თემა</a></li>
                    <li><a className="text-white hover:underline" href="#ocean-crabs">ზღვის კოჭები</a></li>
                    <li><a className="text-white hover:underline" href="#super-heroes">სუპერ გმირები</a></li>
                    <li><a className="text-white hover:underline" href="#product-map">პროდუქტების მარკირება</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
