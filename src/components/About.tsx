import { Users, Utensils, Wine, Baby } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Table Service',
      description: 'Enjoy attentive service in our comfortable dining area',
    },
    {
      icon: <Wine className="w-8 h-8" />,
      title: 'Bar On Site',
      description: 'Extensive selection of spirits, cocktails, and craft beers',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Group & Solo Dining',
      description: 'Perfect for intimate dinners or larger gatherings',
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: 'Family Friendly',
      description: 'Kid-friendly environment welcoming guests of all ages',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About The Village
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Located in the heart of Benin City, The Village Restaurant & Lounge has become
            a beloved destination for food enthusiasts and social gatherings. We pride ourselves
            on creating a casual yet trendy atmosphere where exceptional food meets warm hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-amber-600 flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Our Story
          </h3>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              The Village Restaurant & Lounge brings together the best of contemporary dining
              with the warmth of traditional Nigerian hospitality. Whether you're joining us
              for a business lunch, romantic dinner, or celebratory gathering, our team is
              dedicated to making your experience memorable.
            </p>
            <p>
              Our menu features a carefully curated selection of dishes that celebrate both
              local and international flavors. From quick bites to full-course meals, every
              dish is prepared with attention to detail and quality ingredients.
            </p>
            <p>
              With our convenient location on Murtala Muhammed Way, ample parking, and a
              welcoming atmosphere, The Village has become the go-to spot for discerning
              diners in Benin City and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
