import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold text-gray-800">Welcome, User</h2>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
        Logout
      </button>
    </header>
  );
};

export default Header;