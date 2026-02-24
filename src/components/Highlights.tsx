import { Beer, Wifi, ParkingCircle, WashingMachine, Calendar, CreditCard } from 'lucide-react';

export default function Highlights() {
  const highlights = [
    {
      icon: <Beer className="w-12 h-12" />,
      title: 'Great Beer Selection',
      description: 'Wide variety of local and imported beers',
    },
    {
      icon: <ParkingCircle className="w-12 h-12" />,
      title: 'Free Parking',
      description: 'Street and lot parking available',
    },
    {
      icon: <WashingMachine className="w-12 h-12" />,
      title: 'Clean Facilities',
      description: 'Well-maintained restrooms and dining areas',
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: 'Reservations Welcome',
      description: 'Book your table in advance',
    },
    {
      icon: <Wifi className="w-12 h-12" />,
      title: 'Modern Atmosphere',
      description: 'Casual yet trendy vibe',
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: 'Flexible Payments',
      description: 'Credit, debit, and mobile payments',
    },
  ];

  const paymentMethods = [
    'Credit Cards',
    'Debit Cards',
    'NFC Mobile Payments',
    'Cash',
  ];

  return (
    <section id="highlights" className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose The Village
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Experience the perfect combination of great food, drinks, and atmosphere
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-amber-600 flex justify-center mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Payment Methods Accepted
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="bg-amber-50 border-2 border-amber-200 rounded-lg px-6 py-3 text-gray-800 font-medium"
              >
                {method}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">
            We make it easy and convenient to enjoy your meal with multiple payment options
          </p>
        </div>
      </div>
    </section>
  );
}
