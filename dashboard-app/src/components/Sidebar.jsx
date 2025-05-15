import React from "react";
import { Menu } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="hidden md:flex w-64 bg-white shadow-lg p-5 flex-col">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Dashboard</h1>
      <ul className="space-y-4">
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Home</li>
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Analytics</li>
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Reports</li>
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;