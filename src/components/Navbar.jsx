import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();
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

        {/* Navigation Links */}
        <nav className="flex space-x-8">
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

        {/* Call Button */}
        <a
          href="tel:+919999999999"
          className="bg-purple-600 text-white px-4 py-2 text-sm rounded-md font-medium hover:bg-purple-700 transition"
        >
          Call Us
        </a>
      </div>
    </header>
  );
}
