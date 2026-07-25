import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
      <div className="flex items-center justify-between px-8 py-6">

        <h1 className="text-2xl font-bold text-white">
          Nexvora
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive ? "text-purple-500 font-semibold" : "text-white"
    }
  >
    Home
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
      isActive ? "text-purple-500 font-semibold" : "text-white"
    }
  >
    About
  </NavLink>

  <NavLink
    to="/services"
    className={({ isActive }) =>
      isActive ? "text-purple-500 font-semibold" : "text-white"
    }
  >
    Services
  </NavLink>

  <NavLink
    to="/projects"
    className={({ isActive }) =>
      isActive ? "text-purple-500 font-semibold" : "text-white"
    }
  >
    Projects
  </NavLink>

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      isActive ? "text-purple-500 font-semibold" : "text-white"
    }
  >
    Contact
  </NavLink>
</div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-8 pb-6 text-white">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;