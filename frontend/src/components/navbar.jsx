import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex gap-6">
      <Link to="/" className="font-bold">
        OlympINDIA28
      </Link>

      <Link to="/prediction">Prediction</Link>
      <Link to="/rankings">Rankings</Link>
      <Link to="/comparison">Comparison</Link>
      <Link to="/insights">Insights</Link>
    </nav>
  );
}

export default Navbar;
