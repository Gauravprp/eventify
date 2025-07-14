import Faq from '../../components/Faq';

export default function Wedding() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center h-[60vh] flex items-center justify-center">
        <div className="bg-black bg-opacity-60 w-full h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Dream Weddings, Perfectly Planned</h1>
            <p className="text-lg md:text-xl text-gray-200">
              From intimate ceremonies to grand celebrations, we turn your love story into an unforgettable event.
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Your Vision, Our Expertise</h2>
          <p className="text-gray-600 text-lg">
            Our wedding planning service covers every detail: venue selection, decor, catering, entertainment, and guest management. We blend creativity with flawless execution, ensuring your special day is stress-free and magical.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">Why Choose Our Wedding Planners?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-purple-600 mb-2">Personalized Themes</h4>
              <p className="text-gray-600">We design weddings that reflect your unique style and love story.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-purple-600 mb-2">Vendor Coordination</h4>
              <p className="text-gray-600">Our team manages all vendors, so you can focus on enjoying your day.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-purple-600 mb-2">Memorable Experiences</h4>
              <p className="text-gray-600">We create magical moments that you and your guests will cherish forever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Faq />
    </div>
  );
}
