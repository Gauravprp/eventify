import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    { title: 'Wedding Planning', icon: '💍', path: '/services/wedding' },
    { title: 'Surprise Events', icon: '🎉', path: '/services/surprise' },
    { title: 'Corporate Events', icon: '🏢', path: '/services/corporate' },
    { title: 'Spiritual Gatherings', icon: '🕊️', path: '/services/spiritual' },
    { title: 'School/College Events', icon: '🎓', path: '/services/education' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Services</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link to={service.path} key={index}>
              <div className="group bg-white hover:bg-gray-900 transition duration-500 ease-in-out rounded-xl shadow-md hover:shadow-xl p-6 cursor-pointer transform hover:-rotate-1 hover:scale-105">
                <div className="text-4xl mb-4 group-hover:text-white transition">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white transition">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-500 group-hover:text-gray-300 transition">
                  Effortlessly streamline your events with our creative planning and flawless execution.
                </p>
                <div className="mt-4 text-sm font-medium text-purple-600 group-hover:text-green-400 transition flex items-center">
                  Learn more
                  <span className="ml-1 transform group-hover:translate-x-1 transition">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
