export default function Gallery() {
  const images = [
    '/assets/image1.jpg',
    '/assets/image2.jpg',
    '/assets/image3.jpg',
    '/assets/image4.jpg',
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Event Highlights</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Gallery ${i + 1}`} className="rounded-xl shadow hover:scale-105 transition" />
          ))}
        </div>
      </div>
    </section>
  );
}
