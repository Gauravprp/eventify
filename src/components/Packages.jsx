import { CheckCircle2 } from 'lucide-react'; // or any icon library

export default function Packages() {
  const tiers = [
    {
      name: 'Basic',
      price: '₹9,999',
      features: ['Basic Decor', '1 Coordinator'],
      color: 'from-purple-400 to-purple-600',
      icon: '🎯',
    },
    {
      name: 'Premium',
      price: '₹24,999',
      features: ['Themed Decor', 'Photo Shoot', '3 Coordinators'],
      color: 'from-indigo-400 to-indigo-600',
      icon: '🚀',
    },
    {
      name: 'Luxury',
      price: '₹49,999',
      features: ['Custom Decor', 'Live Music', 'Full Team'],
      color: 'from-pink-400 to-pink-600',
      icon: '👑',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-14">Our Packages</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 hover:-translate-y-2 transform transition duration-300"
            >
              <div className={`w-14 h-14 text-3xl mb-4 flex items-center justify-center rounded-full bg-gradient-to-br ${tier.color} text-white`}>
                {tier.icon}
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-1">{tier.name}</h4>
              <p className="text-3xl font-bold text-gray-900 mb-4">{tier.price}</p>
              <ul className="space-y-3 text-gray-600 text-sm">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500 w-4 h-4" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full py-2 rounded-lg text-white bg-gradient-to-r ${tier.color} hover:brightness-110 transition`}>
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
