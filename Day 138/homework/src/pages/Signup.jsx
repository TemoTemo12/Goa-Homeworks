function Signup() {
    return (
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-md"/>
          <input type="password" placeholder="Password" className="w-full p-3 border rounded-md"/>
          <button type="submit" className="w-full bg-blue-800 text-white py-3 rounded-md">Sign Up</button>
        </form>
      </div>
    );
  }
  
  export default Signup;
  