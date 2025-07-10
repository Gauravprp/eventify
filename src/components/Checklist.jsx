import { useState } from 'react';

export default function Checklist() {
  const addOns = [
    { name: 'DJ & Sound', price: 3000 },
    { name: 'Live Music', price: 5000 },
    { name: 'Photography', price: 4000 },
    { name: 'Catering', price: 8000 },
  ];
  const [selected, setSelected] = useState([]);

  const toggle = (name) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const total = selected.reduce((sum, item) => {
    const addon = addOns.find(a => a.name === item);
    return sum + (addon?.price || 0);
  }, 0);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Customize Your Event</h3>
        <div className="space-y-4">
          {addOns.map((addon, i) => (
            <label key={i} className="flex items-center space-x-4">
              <input type="checkbox" className="w-5 h-5 accent-purple-600" checked={selected.includes(addon.name)} onChange={() => toggle(addon.name)} />
              <span>{addon.name} (₹{addon.price})</span>
            </label>
          ))}
        </div>
        <div className="mt-6 text-xl font-semibold text-purple-700">
          Estimated Add-on Cost: ₹{total}
        </div>
      </div>
    </section>
  );
}
