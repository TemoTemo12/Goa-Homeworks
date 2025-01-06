import React from 'react';

const HeaderWithTraining = () => {
    return (
        <div className="flex flex-col items-start px-8">
            {/* Header */}
            <header className="w-full bg-gray-800 p-4">
                <nav>
                    <ul className="flex justify-start">
                        <li className="text-white mr-4">Home</li>
                        <li className="text-white mr-4">About us</li>
                        <li className="text-white mr-4">Blog</li>
                        <li className="text-white ml-auto">Sign in</li>
                    </ul>
                </nav>
            </header>

            {/* Main Section */}
            <section className="flex flex-col md:flex-row mt-10 w-full">
                {/* Left Side */}
                <div className="md:w-1/2">
                    <h2 className="text-5xl font-bold mb-4">Training</h2>
                    <p className="mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliqua. Ut wisi enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300">
                        Read More
                    </button>
                </div>

                {/* Right Side - Image */}
                <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center items-center">
                    <img
                        src="/images/image.png" // Make sure the path is correct
                        alt="Training Illustration"
                        className="max-w-xs h-auto"
                    />
                </div>
            </section>
        </div>
    );
};

export default HeaderWithTraining;
