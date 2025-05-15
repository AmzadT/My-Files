import { Link, useLocation } from "react-router-dom";
import { FaSignInAlt, FaMusic, FaEnvelope } from "react-icons/fa";

const headerTabs = [
  { name: "Examples", path: "/examples" },
  { name: "Mail", path: "/mail" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Tasks", path: "/tasks" },
  { name: "Playground", path: "/playground" },
  { name: "Forms", path: "/forms" },
  { name: "Music", path: "/music" },
  { name: "Authentication", path: "/auth" },
];

export default function Header() {
  const location = useLocation();

  return (
    <nav className="flex space-x-4 p-4 border-b border-gray-700 text-sm">
      {headerTabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        return (
          <Link
            key={tab.name}
            to={tab.path}
            className={`${
              isActive ? "bg-white text-black" : "hover:text-white"
            } px-3 py-1 rounded-full transition-colors flex items-center space-x-2`}
          >
            {tab.name === "Authentication" && <FaSignInAlt />}
            {tab.name === "Music" && <FaMusic />}
            {tab.name === "Mail" && <FaEnvelope />}
            <span>{tab.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
