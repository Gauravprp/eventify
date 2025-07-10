export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} EventCraft. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/services" className="hover:underline">Services</a>
          <a href="/gallery" className="hover:underline">Gallery</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
