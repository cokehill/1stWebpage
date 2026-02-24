import { MapPin, Navigation, ParkingCircle } from 'lucide-react';

export default function Location() {
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=8JWV%2BF3+Benin+City,+Edo,+Nigeria';

  return (
    <section id="location" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Visit Us
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Conveniently located in the heart of Benin City with easy access and ample parking
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg shadow-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Address</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    20 Murtala Muhammed Way<br />
                    Avbiama, Benin City<br />
                    300104, Edo State<br />
                    Nigeria
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Plus Code:</span> 8JWV+F3
                </p>
                <p className="text-gray-600 text-sm">
                  Use this code for precise navigation with Google Maps
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white rounded-lg shadow-lg p-8 border-2 border-amber-200">
              <div className="flex items-start gap-4 mb-4">
                <ParkingCircle className="w-8 h-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Parking Information
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      <span>Free parking lot on-site</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      <span>Street parking available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      <span>Well-lit and secure parking area</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg w-full"
            >
              <Navigation size={24} />
              Open in Google Maps
            </a>
          </div>

          <div className="rounded-lg overflow-hidden shadow-xl h-[500px] lg:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0447073848445!2d5.643!3d6.347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjAnNDkuMiJOIDXCsDM4JzM0LjgiRQ!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Village Restaurant & Lounge Location"
            ></iframe>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <h4 className="font-bold text-gray-900 mb-2">Easy Access</h4>
            <p className="text-gray-600">
              Located on major road with excellent visibility
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <h4 className="font-bold text-gray-900 mb-2">Public Transport</h4>
            <p className="text-gray-600">
              Accessible by taxi and public transportation
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <h4 className="font-bold text-gray-900 mb-2">Safe Area</h4>
            <p className="text-gray-600">
              Well-lit surroundings with security presence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
