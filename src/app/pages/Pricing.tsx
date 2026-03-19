import { CheckCircle, Truck, Clock, Sparkles } from "lucide-react";
import { LinkButton } from "../components/LinkButton";

export function Pricing() {
  const pricingTiers = [
    {
      name: "Wash, Dry & Fold",
      price: "₱85",
      unit: "per kilo",
      description: "Perfect for everyday clothing",
      features: [
        "Eco-friendly detergents",
        "Fabric softener included",
        "Sorted by preference",
        "Neatly folded",
        "24-48 hour turnaround",
        "Free pickup & delivery",
      ],
      popular: false,
    },
    {
      name: "Wash, Dry & Press",
      price: "₱120",
      unit: "per item",
      description: "Professional pressing for business attire",
      features: [
        "Expert steam pressing",
        "Wrinkle-free finish",
        "Hung on hangers",
        "Plastic covering",
        "2-3 day turnaround",
        "Free pickup & delivery",
      ],
      popular: true,
    },
    {
      name: "Dry Cleaning",
      price: "₱250",
      unit: "starting at",
      description: "Specialized care for delicate items",
      features: [
        "Gentle cleaning process",
        "Stain treatment included",
        "Professional finishing",
        "Protective garment bags",
        "3-5 day turnaround",
        "Free pickup & delivery",
      ],
      popular: false,
    },
  ];

  const additionalPricing = [
    {
      category: "Household Items",
      items: [
        { name: "Comforter (Twin/Full)", price: "₱1,400-₱1,900" },
        { name: "Comforter (Queen/King)", price: "₱2,000-₱2,600" },
        { name: "Blanket", price: "₱850-₱1,400" },
        { name: "Bedding Set", price: "₱1,100-₱1,700" },
      ],
    },
    {
      category: "Specialty Items",
      items: [
        { name: "Suit (2-piece)", price: "₱1,000-₱1,250" },
        { name: "Dress", price: "₱700-₱1,000" },
        { name: "Wedding Gown", price: "₱8,500+" },
        { name: "Leather/Suede", price: "₱1,700+" },
      ],
    },
    {
      category: "Alterations",
      items: [
        { name: "Hem Pants", price: "₱350-₱450" },
        { name: "Hem Dress", price: "₱450-₱700" },
        { name: "Take In/Let Out", price: "₱700-₱1,000" },
        { name: "Zipper Replacement", price: "₱450-₱700" },
      ],
    },
  ];

  const benefits = [
    {
      icon: Truck,
      title: "Free Pickup & Delivery",
      description:
        "No extra charge for pickup and delivery within our service area",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Most orders ready within 24-48 hours",
    },
    {
      icon: Sparkles,
      title: "No Minimum Order",
      description: "We serve all order sizes, no minimum required",
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_30%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            Quality laundry service at fair Philippine peso rates. No hidden
            fees, no surprises — just clean clothes at honest prices.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative rounded-3xl border-2 p-10 transition-all duration-300 ${
                  tier.popular
                    ? "border-teal-600 bg-gradient-to-br from-teal-50 to-white shadow-2xl scale-105 hover:-translate-y-2"
                    : "border-gray-200 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                  <div className="mb-3">
                    <span className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                      {tier.price}
                    </span>
                    <span className="text-gray-600 ml-2 text-lg">{tier.unit}</span>
                  </div>
                  <p className="text-gray-600 text-lg">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <LinkButton
                  to="/contact"
                  className="w-full"
                  size="lg"
                  variant={tier.popular ? "default" : "outline"}
                >
                  Get Started
                </LinkButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">What's Included</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <benefit.icon className="w-10 h-10 text-teal-700" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Specialty items and services with transparent pricing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalPricing.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-100 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold mb-8 pb-6 border-b-2 border-gray-100">
                  {category.category}
                </h3>
                <ul className="space-y-5">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center gap-4">
                      <span className="text-gray-700 text-base">{item.name}</span>
                      <span className="font-bold text-teal-700 text-lg whitespace-nowrap">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Prices may vary based on item condition and specific requirements.
              Contact us for a custom quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            Delivery Information
          </h2>
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-teal-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-5">Service Area</h3>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  We offer free pickup and delivery within a 5-mile radius of our
                  location. Extended delivery areas available for an additional fee.
                </p>
                <h3 className="text-2xl font-semibold mb-5">Minimum Order</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  While we have no minimum order requirement, orders under ₱500 may be
                  subject to a small delivery fee during peak hours.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-5">Schedule & Hours</h3>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  Pickup and delivery available Monday-Saturday, 8am-8pm. Sunday
                  service available by request.
                </p>
                <h3 className="text-2xl font-semibold mb-5">Same-Day Service</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Rush service available for an additional 50% surcharge. Orders must
                  be received before 10am for same-day service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_30%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-teal-100 mb-10 leading-relaxed">
            Schedule your first pickup and experience quality laundry service at
            reasonable prices
          </p>
          <LinkButton
            to="/contact"
            size="lg"
            variant="secondary"
            className="shadow-2xl"
          >
            Schedule Pickup Now
          </LinkButton>
        </div>
      </section>
    </div>
  );
}