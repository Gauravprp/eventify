import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-100 to-blue-100 py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Crafting Moments, <span className="text-purple-600">Creating Memories</span>
        </h2>
        <p className="mt-6 text-lg text-gray-600">
          Weddings, Surprises, Corporate, and Spiritual Events — Planned Just for You.
        </p>
        <Link to="/services" className="mt-8 inline-block bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition">
          Explore Our Services
        </Link>
      </div>
    </section>
  );
}
