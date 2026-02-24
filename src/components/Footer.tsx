import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-400">
              The Village Restaurant & Lounge
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              A premier dining destination in Benin City offering exceptional cuisine
              and an unforgettable atmosphere.
            </p>
            <div className="flex items-center gap-1 text-amber-400 mb-2">
              <span className="text-2xl font-bold">4.3</span>
              <span className="text-xl">★★★★☆</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-amber-400" />
                <a href="tel:09151820000" className="hover:text-amber-400 transition-colors">
                  09151820000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0 text-amber-400" />
                <a href="mailto:info@thevillagerestaurant.ng" className="hover:text-amber-400 transition-colors">
                  info@thevillagerestaurant.ng
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-amber-400" />
                <span className="text-gray-300">
                  20 Murtala Muhammed Way<br />
                  Avbiama, Benin City 300104<br />
                  Edo State, Nigeria
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Hours of Operation</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0 text-amber-400" />
                <div>
                  <p className="font-semibold text-white">Mon - Thu</p>
                  <p>11:00 AM - 11:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0 text-amber-400" />
                <div>
                  <p className="font-semibold text-white">Fri - Sat</p>
                  <p>11:00 AM - 12:00 AM</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0 text-amber-400" />
                <div>
                  <p className="font-semibold text-white">Sunday</p>
                  <p>12:00 PM - 10:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span>Dine-in Service</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span>Takeaway Orders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span>Table Reservations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span>Private Events</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span>Catering Services</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} The Village Restaurant & Lounge. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
