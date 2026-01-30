import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      
      {/* Project Name */}
      <h1 className="text-xl font-bold text-blue-600">
        OlympINDIA28
      </h1>

      {/* Navigation Links */}
      <div className="flex gap-6 text-gray-700 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : ""
          }
        >
          Home
        </NavLink>

        <NavLink to="/prediction">Prediction</NavLink>
        <NavLink to="/rankings">Rankings</NavLink>
        <NavLink to="/comparison">Comparison</NavLink>
        <NavLink to="/insights">Insights</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
