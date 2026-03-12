import { useState } from 'react';
import { ShoppingCart, Phone, Mail, Clock } from 'lucide-react';

export default function Order() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderType: 'lunch',
    items: [] as string[],
    specialRequests: '',
    deliveryTime: '',
  });

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

  const beverageItems = [
    'Premium Spirits & Cocktails',
    'Craft Beers',
    'Soft Drinks & Juices',
    'Coffee & Tea',
    'Wine Selection',
  ];

  const getMenuItems = () => {
    if (formData.orderType === 'lunch') return lunchItems;
    if (formData.orderType === 'dinner') return dinnerItems;
    return beverageItems;
  };

  const handleItemToggle = (item: string) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.includes(item)
        ? prev.items.filter(i => i !== item)
        : [...prev.items, item]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '+2348126001223';
    const message = `Hello! I'd like to place an order:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nOrder Type: ${formData.orderType.charAt(0).toUpperCase() + formData.orderType.slice(1)}\n\nItems:\n${formData.items.map(item => `• ${item}`).join('\n')}\n\nDelivery Time: ${formData.deliveryTime || 'ASAP'}\n\nSpecial Requests: ${formData.specialRequests || 'None'}`;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="order" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Place Your Order
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Order delicious food and beverages from The Village Restaurant & Lounge for delivery
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-amber-600" />
              Order Details
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="orderType" className="block text-gray-700 font-medium mb-2">
                  What are you ordering? *
                </label>
                <select
                  id="orderType"
                  name="orderType"
                  required
                  value={formData.orderType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="lunch">Lunch Menu</option>
                  <option value="dinner">Dinner Menu</option>
                  <option value="beverages">Beverages</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-3">
                  Select Items *
                </label>
                <div className="space-y-2 max-h-48 overflow-y-auto bg-gray-50 p-4 rounded-lg border border-gray-200">
                  {getMenuItems().map((item, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`item-${index}`}
                        checked={formData.items.includes(item)}
                        onChange={() => handleItemToggle(item)}
                        className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                      />
                      <label
                        htmlFor={`item-${index}`}
                        className="ml-3 text-gray-700 cursor-pointer select-none"
                      >
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
                {formData.items.length === 0 && (
                  <p className="text-amber-600 text-sm mt-2">Please select at least one item</p>
                )}
              </div>

              <div>
                <label htmlFor="deliveryTime" className="block text-gray-700 font-medium mb-2">
                  Delivery Time
                </label>
                <input
                  type="time"
                  id="deliveryTime"
                  name="deliveryTime"
                  value={formData.deliveryTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="specialRequests" className="block text-gray-700 font-medium mb-2">
                  Special Requests or Allergies
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows={3}
                  value={formData.specialRequests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                  placeholder="Any dietary restrictions or special requests?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formData.items.length === 0}
                className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 text-white py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
              >
                Complete Order on WhatsApp
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                How It Works
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Fill the Form</p>
                    <p className="text-gray-600">Select your items and provide your details</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Send via WhatsApp</p>
                    <p className="text-gray-600">Your order will be sent directly to our team</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Confirmation</p>
                    <p className="text-gray-600">We'll confirm your order and delivery time</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold">
                    4
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Enjoy Your Meal</p>
                    <p className="text-gray-600">Receive your order at your preferred time</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/2348126001223"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 text-lg"
                    >
                      +234 812 600 1223
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a
                      href="mailto:info@thevillagerestaurant.ng"
                      className="text-amber-600 hover:text-amber-700"
                    >
                      info@thevillagerestaurant.ng
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Operating Hours</p>
                    <div className="space-y-1 text-gray-700 text-sm">
                      <p>Monday - Thursday: 11:00 AM - 11:00 PM</p>
                      <p>Friday - Saturday: 11:00 AM - 12:00 AM</p>
                      <p>Sunday: 12:00 PM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
