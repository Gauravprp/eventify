import Faq from '../../components/Faq';

export default function Corporate() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center h-[60vh] flex items-center justify-center">
        <div className="bg-black bg-opacity-60 w-full h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Corporate Events, Seamlessly Executed</h1>
            <p className="text-lg md:text-xl text-gray-200">
              From conferences to team-building, we deliver professional, impactful experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Professionalism Meets Creativity</h2>
          <p className="text-gray-600 text-lg">
            Our corporate event planning covers seminars, product launches, annual meets, and more. We handle logistics, branding, technology, and hospitality, ensuring your business goals are met with style and precision.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">Why Choose Our Corporate Planners?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-purple-600 mb-2">End-to-End Management</h4>
              <p className="text-gray-600">We take care of every detail, from invitations to post-event feedback.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-purple-600 mb-2">Brand-Focused Approach</h4>
              <p className="text-gray-600">Your brand values and objectives are at the heart of our planning.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-purple-600 mb-2">Innovative Solutions</h4>
              <p className="text-gray-600">We use the latest tech and creative ideas to make your event stand out.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Faq />
    </div>
  );
}
