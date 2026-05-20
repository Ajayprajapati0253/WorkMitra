import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-400">WorkMitra</h1>

        {/* Desktop Menu */}
        <Link to="/">
          <li className="cursor-pointer hover:text-yellow-400">Home</li>
        </Link>

        <Link to="/workers">
          <li className="cursor-pointer hover:text-yellow-400">Workers</li>
        </Link>

        <Link to="/login">
          <li className="cursor-pointer hover:text-yellow-400">Login</li>
        </Link>

        <Link to="/register">
          <li className="cursor-pointer hover:text-yellow-400">Register</li>
        </Link>

        <Link to="/profile">
          <li className="cursor-pointer hover:text-yellow-400">Profile</li>
        </Link>

        {/* Mobile Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 text-lg">
          <li className="hover:text-yellow-400">Home</li>

          <li className="hover:text-yellow-400">Workers</li>

          <li className="hover:text-yellow-400">Categories</li>

          <li className="hover:text-yellow-400">Login</li>

          <li className="hover:text-yellow-400">Register</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
