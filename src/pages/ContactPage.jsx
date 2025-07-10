import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[url('/assets/contact-hero.jpg')] bg-cover bg-center h-[60vh] flex items-center justify-center">
        <div className="bg-black bg-opacity-60 w-full h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl text-gray-200">We'd love to be part of your celebration!</p>
          </div>
        </div>
      </section>

      {/* Contact Form with Info */}
      <ContactForm />
    </div>
  );
}
