// ArticlePreview.js
import React from 'react';

const ArticlePreview = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        className="w-full"
        src="/images/article-preview.jpg" // Replace with your article image path
        alt="Article Preview"
      />
      <div className="p-6">
        <p className="text-sm text-gray-400 uppercase">Technology</p>
        <h2 className="mt-2 font-bold text-xl text-gray-800 hover:text-blue-500 cursor-pointer">
          The Bright Future of Web 3.0?
        </h2>
        <p className="mt-4 text-gray-600">
          We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
        </p>
      </div>
    </div>
  );
};

export default ArticlePreview;
