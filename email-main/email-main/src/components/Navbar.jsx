// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Examples", path: "/examples" },
  { name: "Mail", path: "/mail" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Tasks", path: "/tasks" },
  { name: "Playground", path: "/playground" },
  { name: "Forms", path: "/forms" },
  { name: "Music", path: "/music" },
  { name: "Authentication", path: "/auth" },
];

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex space-x-6 border-b border-gray-800">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `text-sm px-3 py-1 rounded-full transition-colors duration-200 ${
              isActive
                ? "bg-white text-black font-medium"
                : "text-gray-400 hover:text-white"
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}
