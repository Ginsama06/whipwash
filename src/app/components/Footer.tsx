import { Link } from "react-router-dom";
import {
  Droplets,
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export function Footer() {
  const company = [
    { name: "About Us", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const contact = [
    { icon: Phone, text: "(555) 123-4567" },
    { icon: Mail, text: "hello@whipwash.com" },
    { icon: MapPin, text: "123 Clean Street, Your City" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6 group">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-2.5 rounded-2xl shadow-lg group-hover:shadow-teal-500/20 transition-all duration-300">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">WhipWash</span>
            </div>
            <p className="text-sm text-gray-400">
              Your neighborhood laundry service for busy individuals. Clean,
              fresh, and convenient.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {company.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              {contact.map((item) => (
                <li key={item.text} className="flex items-start gap-2">
                  <item.icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Business Hours</h3>
            <p className="text-sm mb-4">
              Monday - Friday: 7am - 9pm
              <br />
              Saturday: 8am - 8pm
              <br />
              Sunday: 9am - 6pm
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} WhipWash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}