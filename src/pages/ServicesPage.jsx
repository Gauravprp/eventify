import Services from '../components/Services';
import Faq from '../components/Faq';

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
    <section className="bg-[url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center h-[60vh] flex items-center justify-center">
  <div className="bg-black bg-opacity-60 w-full h-full flex items-center justify-center">
    <div className="text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Explore Our Expert Event Services</h1>
      <p className="text-lg md:text-xl text-gray-200">
        Your moments, our mission – from intimate surprises to grand weddings, we plan it all with perfection.
      </p>
    </div>
  </div>
</section>


      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Creative. Personalized. Memorable.</h2>
          <p className="text-gray-600 text-lg">
            We don’t just plan events — we craft unforgettable experiences. Every service is curated to fit your needs, budget, and imagination. Whether it’s a themed birthday, a spiritual gathering, or a formal corporate seminar, our team makes it seamless.
          </p>
        </div>
      </section>

      {/* Services Cards (from Services.jsx) */}
      <Services />

      {/* Optional Why Choose Us Section */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-purple-600 mb-2">Experienced Team</h4>
              <p className="text-gray-600">Our event experts bring years of experience to ensure every detail is perfect.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-purple-600 mb-2">Customized Packages</h4>
              <p className="text-gray-600">Choose from flexible service options tailored to your event size and budget.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-purple-600 mb-2">Creative Excellence</h4>
              <p className="text-gray-600">From decor to entertainment, we bring fresh, creative ideas to life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
     <Faq/>
    </div>
  );
}
