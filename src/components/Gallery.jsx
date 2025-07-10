export default function Gallery() {
  const images = [
    '/assets/image1.jpg',
    '/assets/image2.jpg',
    '/assets/image3.jpg',
    '/assets/image4.jpg',
    // add more if needed
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="bg-[url('/assets/gallery-hero.jpg')] bg-cover bg-center h-[60vh] flex items-center justify-center">
        <div className="bg-black bg-opacity-60 w-full h-full flex items-center justify-center">
          <h1 className="text-5xl text-white font-bold text-center px-4">Gallery of Unforgettable Moments</h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">Event Highlights</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Gallery ${i + 1}`}
                className="rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition duration-300"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
