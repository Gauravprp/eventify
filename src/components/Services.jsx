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
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
           
<Link to={service.path} key={index}>
  <div className="bg-purple-50 p-6 rounded-xl shadow-lg hover:scale-105 transition text-center">
    <div className="text-4xl mb-4">{service.icon}</div>
    <h4 className="text-xl font-semibold text-purple-700">{service.title}</h4>
  </div>
</Link>
          ))}
        </div>
      </div>
    </section>
  );
}
