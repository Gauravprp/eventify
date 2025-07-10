export default function Packages() {
  const tiers = [
    { name: 'Basic', price: '₹9,999', features: ['Basic Decor', '1 Coordinator'] },
    { name: 'Premium', price: '₹24,999', features: ['Themed Decor', 'Photo Shoot', '3 Coordinators'] },
    { name: 'Luxury', price: '₹49,999', features: ['Custom Decor', 'Live Music', 'Full Team'] },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Our Packages</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div key={i} className="border p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-purple-600 mb-2">{tier.name}</h4>
              <p className="text-3xl font-bold text-gray-800 mb-4">{tier.price}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {tier.features.map((f, j) => <li key={j}>• {f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
