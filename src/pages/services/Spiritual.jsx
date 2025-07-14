import Faq from '../../components/Faq';

export default function Spiritual() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[url('https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center h-[60vh] flex items-center justify-center">
        <div className="bg-black bg-opacity-60 w-full h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Spiritual Gatherings, Soulful Experiences</h1>
            <p className="text-lg md:text-xl text-gray-200">
              From poojas to retreats, we create serene, meaningful spiritual events for all.
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Harmony & Devotion</h2>
          <p className="text-gray-600 text-lg">
            Our spiritual event planning includes religious ceremonies, meditation retreats, satsangs, and more. We ensure every detail is handled with respect, care, and a deep sense of purpose.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">Why Choose Our Spiritual Planners?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-purple-600 mb-2">Respectful Organization</h4>
              <p className="text-gray-600">We honor traditions and ensure every ritual is performed with authenticity.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-purple-600 mb-2">Peaceful Ambience</h4>
              <p className="text-gray-600">We create tranquil settings for spiritual growth and connection.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-purple-600 mb-2">Inclusive Approach</h4>
              <p className="text-gray-600">We welcome all faiths and beliefs, making every event meaningful for everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Faq />
    </div>
  );
}
