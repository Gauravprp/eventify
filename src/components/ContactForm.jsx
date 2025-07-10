export default function ContactForm() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side: Info Section */}
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-gray-900">Let's Plan Your Event</h3>
          <p className="text-gray-600 text-lg">
            Fill out the form and our event planning team will reach out shortly.
            Whether it's a wedding, corporate event, or surprise party – we've got you covered.
          </p>

          <div className="space-y-4">
            <div className="flex items-center text-purple-700 space-x-3">
              <i className="fas fa-phone-alt text-xl"></i>
              <span>+91 89494 27254</span>
            </div>
            <div className="flex items-center text-purple-700 space-x-3">
              <i className="fas fa-phone-alt text-xl"></i>
              <span>+91 89494 27255</span>
            </div>
            <div className="flex items-center text-purple-700 space-x-3">
              <i className="fas fa-envelope text-xl"></i>
              <a href="mailto:youremail@example.com" className="underline">youremail@example.com</a>
            </div>
          </div>

          <div className="pt-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Follow Us</h4>
            <div className="flex space-x-4 text-purple-700 text-2xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-900">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-900">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-900">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-900">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Form Section */}
        <div className="bg-white p-8 rounded-xl shadow">
          <form
            action="https://formspree.io/f/myzjrykp"
            method="POST"
            className="space-y-4"
          >
            <input type="text" name="name" placeholder="Name" className="w-full p-3 border rounded-lg" required />
            <input type="email" name="email" placeholder="Email" className="w-full p-3 border rounded-lg" required />
            <input type="tel" name="phone" placeholder="Phone" className="w-full p-3 border rounded-lg" />
            <textarea name="message" placeholder="Event Details..." rows="5" className="w-full p-3 border rounded-lg" required />
            <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
