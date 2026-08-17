import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.webp";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Nexvora"
            className="w-12 h-12 object-contain"
          />

          <div>
            <h1 className="text-2xl font-bold tracking-wide text-white">
              Nexvora
            </h1>

            <p className="text-xs text-purple-400">
              Digital Solutions
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-purple-500 font-semibold"
                : "text-white hover:text-purple-400 duration-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-purple-500 font-semibold"
                : "text-white hover:text-purple-400 duration-300"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-purple-500 font-semibold"
                : "text-white hover:text-purple-400 duration-300"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-purple-500 font-semibold"
                : "text-white hover:text-purple-400 duration-300"
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-purple-500 font-semibold"
                : "text-white hover:text-purple-400 duration-300"
            }
          >
            Contact
          </NavLink>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="ml-4 px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 duration-300 font-medium"
          >
            Get Quote
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10 flex flex-col gap-6 px-8 py-6">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-purple-400"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-purple-400"
          >
            About
          </Link>

          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-purple-400"
          >
            Services
          </Link>

          <Link
            to="/projects"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-purple-400"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-purple-400"
          >
            Contact
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-gradient-to-r from-purple-600 to-blue-500 px-5 py-3 rounded-xl text-center"
          >
            Get Quote
          </Link>

        </div>
      )}
    </nav>
  );
}

export default Navbar;