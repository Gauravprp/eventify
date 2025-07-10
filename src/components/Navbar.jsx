import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-purple-700 flex items-center space-x-1">
          <span className="text-black">⚡</span>
          <span>EventCraft</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition ${
                pathname === item.path
                  ? 'text-purple-700 underline underline-offset-4'
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Call Button (Always visible) */}
        <a
          href="tel:+919999999999"
          className="bg-purple-600 text-white px-4 py-2 text-sm rounded-md font-medium hover:bg-purple-700 transition hidden md:inline-block"
        >
          Call Us
        </a>

        {/* Hamburger Button (Mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-purple-700 text-2xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)} // Close on click
              className={`block text-sm font-medium ${
                pathname === item.path
                  ? 'text-purple-700 underline underline-offset-4'
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="tel:+919999999999"
            className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md font-medium hover:bg-purple-700 transition"
          >
            Call Us
          </a>
        </div>
      )}
    </header>
  );
}
