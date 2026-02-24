import { Wine, Beer, Coffee, Sparkles } from 'lucide-react';

export default function Menu() {
  const offerings = [
    {
      icon: <Wine className="w-10 h-10" />,
      title: 'Premium Spirits',
      description: 'Carefully selected spirits and cocktails',
    },
    {
      icon: <Beer className="w-10 h-10" />,
      title: 'Craft Beers',
      description: 'Local and international beer selection',
    },
    {
      icon: <Coffee className="w-10 h-10" />,
      title: 'Quick Bites',
      description: 'Perfect appetizers and light meals',
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: 'Small Plates',
      description: 'Shareable dishes for groups',
    },
  ];

  const lunchItems = [
    'Signature Burgers & Sandwiches',
    'Fresh Garden Salads',
    'Grilled Chicken Specialties',
    'Pasta & Rice Dishes',
    'Traditional Nigerian Favorites',
    'Quick Bites & Appetizers',
  ];

  const dinnerItems = [
    'Premium Steaks & Grills',
    'Fresh Seafood Selection',
    'International Cuisine',
    'Nigerian Delicacies',
    'Vegetarian Options',
    'Signature House Specials',
  ];

  return (
    <section id="menu" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            From casual lunches to elegant dinners, our menu offers something for every palate
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg border-2 border-amber-200 hover:border-amber-400 transition-all text-center"
            >
              <div className="text-amber-600 flex justify-center mb-3">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
              Lunch Menu
            </h3>
            <ul className="space-y-4">
              {lunchItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 text-lg"
                >
                  <span className="text-amber-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-center text-gray-600 italic">
              Served daily from 11:00 AM - 4:00 PM
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
              Dinner Menu
            </h3>
            <ul className="space-y-4">
              {dinnerItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 text-lg"
                >
                  <span className="text-amber-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-center text-gray-600 italic">
              Served daily from 4:00 PM - 11:00 PM
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg mb-4">
            All dishes can be customized to accommodate dietary preferences and allergies
          </p>
          <p className="text-amber-600 font-semibold text-xl">
            Ask your server about our daily specials!
          </p>
        </div>
      </div>
    </section>
  );
}
