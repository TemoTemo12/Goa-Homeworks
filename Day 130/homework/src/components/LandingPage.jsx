const LandingPage = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Website</h1>
        <p className="text-xl text-gray-700 mb-8">
          Explore our features by logging in or signing up.
        </p>
        <div>
          <a
            href="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700 mr-4"
          >
            Login
          </a>
          <a
            href="/signup"
            className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-700"
          >
            Sign Up
          </a>
        </div>
      </div>
    );
  };
  
  export default LandingPage;
  