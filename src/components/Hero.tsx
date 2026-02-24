import { Star, Phone } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          The Village Restaurant & Lounge
        </h1>

        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
            ))}
            <Star className="w-6 h-6 fill-amber-400 text-amber-400" style={{ clipPath: 'inset(0 70% 0 0)' }} />
          </div>
          <span className="text-xl font-semibold">4.3</span>
        </div>

        <p className="text-xl sm:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
          Experience the perfect blend of casual elegance and trendy vibes
        </p>

        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          A premier dining destination in Benin City offering exceptional cuisine,
          craft cocktails, and an unforgettable atmosphere for lunch, dinner, and special occasions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToBooking}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg w-full sm:w-auto"
          >
            Make a Reservation
          </button>
          <a
            href="tel:09151820000"
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Phone size={20} />
            Order Takeaway
          </a>
        </div>

        <div className="mt-8">
          <a
            href="tel:09151820000"
            className="text-white hover:text-amber-400 transition-colors text-lg"
          >
            Call us: 09151820000
          </a>
        </div>
      </div>
    </section>
  );
}
