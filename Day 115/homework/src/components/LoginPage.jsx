import React from 'react';

function LoginPage() {
  return (
    <div className="login p-4 border rounded shadow-lg">
      <h2 className="text-3xl font-bold mb-4">ავტორიზაცია</h2>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="მომხმარებელი"
          className="p-2 border rounded"
        />
        <input
          type="password"
          placeholder="პაროლი"
          className="p-2 border rounded"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          შესვლა
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
