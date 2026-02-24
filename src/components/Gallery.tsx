export default function Gallery() {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'The Village Restaurant Interior',
      category: 'Interior',
    },
    {
      url: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Bar Area with Premium Spirits',
      category: 'Bar',
    },
    {
      url: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Delicious Food Plating',
      category: 'Food',
    },
    {
      url: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Craft Cocktails',
      category: 'Drinks',
    },
    {
      url: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Modern Dining Space',
      category: 'Interior',
    },
    {
      url: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Gourmet Dishes',
      category: 'Food',
    },
    {
      url: 'https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Premium Beverages',
      category: 'Drinks',
    },
    {
      url: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Elegant Bar Setup',
      category: 'Bar',
    },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Take a visual tour of our restaurant, bar, and culinary creations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {image.category}
                  </span>
                  <p className="text-white mt-2 text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Follow us on social media for more photos and updates
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
