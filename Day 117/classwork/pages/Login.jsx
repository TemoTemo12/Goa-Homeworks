const Login = () => {
    return (
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold">Login Page</h1>
        <form className="flex flex-col items-center space-y-4">
          <input type="text" placeholder="Username" className="border p-2 rounded w-64" />
          <input type="password" placeholder="Password" className="border p-2 rounded w-64" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
        </form>
      </div>
    );
  };
  
  export default Login;
  