export default function ContactForm() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Let's Plan Your Event</h3>
       <form
  action="https://formspree.io/f/myzjrykp" // Replace with your real Formspree ID
  method="POST"
  className="grid gap-6"
>
  <input type="text" name="name" placeholder="Name" className="p-3 border rounded-lg" required />
  <input type="email" name="email" placeholder="Email" className="p-3 border rounded-lg" required />
  <input type="tel" name="phone" placeholder="Phone" className="p-3 border rounded-lg" />
  <textarea name="message" placeholder="Event Details..." rows="5" className="p-3 border rounded-lg" required />
  <button type="submit" className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700">
    Submit Inquiry
  </button>
</form>

      </div>
    </section>
  );
}
