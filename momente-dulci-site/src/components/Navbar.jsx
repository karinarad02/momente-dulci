import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-pink-500 text-white shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Momente Magice și Dulci</h1>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-pink-200">
            Home
          </Link>
          <Link to="/despre" className="hover:text-pink-200">
            Despre
          </Link>
          <Link to="/produse" className="hover:text-pink-200">
            Produse
          </Link>
          <Link to="/blog" className="hover:text-pink-200">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-pink-200">
            Contact
          </Link>
          <Link to="/feedback" className="hover:text-pink-200">
            Feedback
          </Link>
        </div>
      </div>
    </nav>
  );
}
