import Faq from '../../components/Faq';

export default function Education() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[url('https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center h-[60vh] flex items-center justify-center">
        <div className="bg-black bg-opacity-60 w-full h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">School & College Events, Inspired Learning</h1>
            <p className="text-lg md:text-xl text-gray-200">
              From annual days to fests, we create educational events that inspire and engage.
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Fun, Learning & Growth</h2>
          <p className="text-gray-600 text-lg">
            Our education event planning covers annual functions, seminars, workshops, and cultural fests. We handle stage setup, activities, guest speakers, and more, making every event a memorable learning experience.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">Why Choose Our Education Planners?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-purple-600 mb-2">Engaging Activities</h4>
              <p className="text-gray-600">We design interactive programs that foster learning and fun.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-purple-600 mb-2">Expert Coordination</h4>
              <p className="text-gray-600">Our team ensures smooth execution, from planning to wrap-up.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-purple-600 mb-2">Memorable Experiences</h4>
              <p className="text-gray-600">We create events that inspire students and educators alike.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Faq />
    </div>
  );
}
