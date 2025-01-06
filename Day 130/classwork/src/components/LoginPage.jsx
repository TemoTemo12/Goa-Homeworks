import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>
        <form>
          {/* Email-ი*/}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 invalid:ring-2 invalid:ring-red-500 hover:border-gray-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password-ი */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 active:ring-2 active:ring-green-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit-ის ღილაკი */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 active:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-100"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
