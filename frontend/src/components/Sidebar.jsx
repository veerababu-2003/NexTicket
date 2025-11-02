import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <ul className="space-y-2">
        <li>
          <Link to="/dashboard" className="block p-2 hover:bg-gray-700 rounded">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/tickets" className="block p-2 hover:bg-gray-700 rounded">
            Tickets
          </Link>
        </li>
        <li>
          <Link
            to="/knowledge-base"
            className="block p-2 hover:bg-gray-700 rounded"
          >
            Knowledge Base
          </Link>
        </li>
        <li>
          <Link to="/profile" className="block p-2 hover:bg-gray-700 rounded">
            Profile
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
