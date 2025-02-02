import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4 mt-10 text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Tech Universe. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
