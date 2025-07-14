import Faq from '../../components/Faq';

export default function Surprise() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[url('https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center h-[60vh] flex items-center justify-center">
        <div className="bg-black bg-opacity-60 w-full h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Surprise Events, Unforgettable Moments</h1>
            <p className="text-lg md:text-xl text-gray-200">
              From birthdays to proposals, we create magical surprises that leave lasting smiles.
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Every Detail, A Delight</h2>
          <p className="text-gray-600 text-lg">
            Our surprise event planning covers creative themes, secret coordination, decor, entertainment, and guest management. We ensure your loved ones are truly amazed and every moment is picture-perfect.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">Why Choose Our Surprise Planners?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-purple-600 mb-2">Creative Concepts</h4>
              <p className="text-gray-600">We dream up unique ideas to make every surprise special and memorable.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-purple-600 mb-2">Seamless Execution</h4>
              <p className="text-gray-600">Our team handles all logistics, so your surprise goes off without a hitch.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-purple-600 mb-2">Lasting Memories</h4>
              <p className="text-gray-600">We create moments that your loved ones will cherish forever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Faq />
    </div>
  );
}
