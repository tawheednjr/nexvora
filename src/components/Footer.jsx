import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowUp } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-8 pt-20 md:px-8">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <Link
              to="/"
              className="inline-block"
            >
              <h2 className="text-3xl font-bold tracking-wide text-white">
                Nexvora
              </h2>

              <p className="mt-1 text-sm text-purple-400">
                Digital Solutions
              </p>
            </Link>

            <p className="mt-6 max-w-md leading-8 text-gray-400">
              We build modern websites, AI-powered applications,
              mobile apps, and scalable digital solutions that help
              businesses grow in the digital world.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex gap-3">

              <a
                href="#"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white"
              >
                <FaInstagram size={19} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white"
              >
                <FaLinkedinIn size={19} />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              <Link
                to="/"
                className="text-gray-400 transition-colors hover:text-purple-400"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-gray-400 transition-colors hover:text-purple-400"
              >
                About
              </Link>

              <Link
                to="/services"
                className="text-gray-400 transition-colors hover:text-purple-400"
              >
                Services
              </Link>

              <Link
                to="/projects"
                className="text-gray-400 transition-colors hover:text-purple-400"
              >
                Projects
              </Link>

              <Link
                to="/contact"
                className="text-gray-400 transition-colors hover:text-purple-400"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Get In Touch
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">

                <Mail
                  size={20}
                  className="mt-1 shrink-0 text-purple-400"
                />

                <div>
                  <p className="text-xs text-gray-600">
                    Email
                  </p>

                  <a
                    href="mailto:hello@nexvora.com"
                    className="text-sm text-gray-400 transition-colors hover:text-purple-400"
                  >
                    hello@nexvora.com
                  </a>
                </div>

              </div>

              <div className="flex items-start gap-3">

                <MapPin
                  size={20}
                  className="mt-1 shrink-0 text-purple-400"
                />

                <div>
                  <p className="text-xs text-gray-600">
                    Location
                  </p>

                  <p className="text-sm text-gray-400">
                    India
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Nexvora. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <Link
              to="/contact"
              className="text-sm text-gray-500 transition-colors hover:text-purple-400"
            >
              Privacy
            </Link>

            <Link
              to="/contact"
              className="text-sm text-gray-500 transition-colors hover:text-purple-400"
            >
              Terms
            </Link>

            {/* Back To Top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400 transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/20 hover:text-white"
            >
              <ArrowUp size={18} />
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;