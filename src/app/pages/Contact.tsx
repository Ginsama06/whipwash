import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll contact you shortly to confirm your pickup.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Clean Street, Your City, ST 12345",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "(555) 123-4567",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@whipwash.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 7am-9pm\nSat: 8am-8pm\nSun: 9am-6pm",
    },
  ];

  const services = [
    "Wash, Dry & Fold",
    "Wash, Dry & Press",
    "Dry Cleaning",
    "Comforters & Bedding",
    "Other",
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_30%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            Ready to experience hassle-free laundry? Schedule a pickup or reach
            out with any questions. We're here to help!
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8">Schedule a Pickup</h2>
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
              >
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Pickup Address *</Label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Main St, City, ST 12345"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Needed *</Label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-500"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Preferred Time *</Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Additional Notes</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any special instructions or questions?"
                    className="mt-1"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Schedule Pickup
                </Button>

                <p className="text-sm text-gray-600">
                  * Required fields. We'll contact you within 2 hours to confirm
                  your pickup time.
                </p>
              </form>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-4 rounded-2xl flex-shrink-0 shadow-md">
                      <info.icon className="w-7 h-7 text-teal-700" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-lg">{info.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line text-base leading-relaxed">
                        {info.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-72 flex items-center justify-center mb-10 shadow-lg">
                <div className="text-center text-gray-500">
                  <MapPin className="w-16 h-16 mx-auto mb-3" />
                  <p className="text-lg font-semibold">Map Location</p>
                  <p className="text-sm">123 Clean Street, Your City</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-2xl p-8 shadow-lg border border-teal-100">
                <h3 className="text-2xl font-bold mb-6">Why Choose WhipWash?</h3>
                <ul className="space-y-3 text-gray-700 text-base">
                  <li className="flex items-center gap-3">
                    <span className="text-teal-600 text-xl">✓</span>
                    <span>Free pickup and delivery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-teal-600 text-xl">✓</span>
                    <span>24-48 hour turnaround</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-teal-600 text-xl">✓</span>
                    <span>Professional, trained staff</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-teal-600 text-xl">✓</span>
                    <span>Eco-friendly options</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-teal-600 text-xl">✓</span>
                    <span>Reasonable prices</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-teal-600 text-xl">✓</span>
                    <span>Satisfaction guaranteed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What is your service area?",
                a: "We offer free pickup and delivery within a 5-mile radius of our location. Extended areas available for a small fee.",
              },
              {
                q: "How does pickup and delivery work?",
                a: "Simply schedule a pickup time, and we'll come to your door to collect your laundry. Once cleaned, we'll deliver it back at your preferred time. You can leave it in a designated spot for contactless service.",
              },
              {
                q: "What forms of payment do you accept?",
                a: "We accept cash, credit cards, debit cards, and mobile payment options. Payment is collected at delivery.",
              },
              {
                q: "Do you offer rush service?",
                a: "Yes! Same-day service is available for orders received before 10am, with a 50% surcharge. Most regular orders are completed within 24-48 hours.",
              },
              {
                q: "What if I'm not satisfied?",
                a: "Your satisfaction is our priority. If you're not happy with our service, let us know within 24 hours and we'll make it right, free of charge.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <h3 className="text-2xl font-semibold mb-4">{item.q}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}