import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white pt-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 pb-12">
        {/* Logo + Address */}
        <div>
          <h2 className="text-2xl font-bold mb-2">EventCraft</h2>
          <p className="text-sm text-purple-200">Your Event. Our Passion.</p>
          <div className="mt-4 text-sm text-purple-100 space-y-1">
            <p>📍 123 Celebration Street</p>
            <p>Joy City, Wonderland 456789</p>
            <p>📧 info@eventcraft.com</p>
            <p>📞 +91 89494 27254</p>
          </div>
        </div>

        {/* Page Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-purple-100">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-sm text-purple-200 mb-3">Get event tips & offers in your inbox!</p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded text-gray-800"
              required
            />
            <button
              type="submit"
              className="bg-white text-purple-700 w-full py-2 rounded font-semibold hover:bg-purple-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Find Us</h3>
          <div className="rounded overflow-hidden">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.799975002521!2d75.80452501458122!3d26.848902283148917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5ec3dfd9f79%3A0x7696b4a9c39235e1!2sJaipur!5e0!3m2!1sen!2sin!4v1599474222577!5m2!1sen!2sin"
              width="100%"
              height="180"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-500 py-6 text-center text-sm text-purple-200 px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center max-w-7xl mx-auto space-y-4 md:space-y-0">
          <p>© 2025 EventCraft. All rights reserved.</p>

          <div className="flex justify-center space-x-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>

          <div className="flex justify-center space-x-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fab fa-facebook-f" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fab fa-instagram" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fab fa-twitter" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
