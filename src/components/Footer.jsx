import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-8 py-12">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-2xl font-bold text-purple-500">
              Nexvora
            </h3>
            <p className="mt-4 text-gray-400">
              Building modern digital experiences for the future.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about" className="hover:text-purple-500 transition">About</Link></li>
              <li><Link to="/about" className="hover:text-purple-500 transition">Services</Link></li>
              <li><Link to="/about" className="hover:text-purple-500 transition">Projects</Link></li>
              <li><Link to="/about" className="hover:text-purple-500 transition">Contacts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Contact
            </h4>

            <a href="mailto:hello@nexvora.com"
            className="text-gray-400 hover:text-purple-500 transition">
            hello@nexvora.com</a>

            <p className="text-gray-400 mt-2">
              Future Tech Solutions
            </p>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500">
          © 2026 Nexvora. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;