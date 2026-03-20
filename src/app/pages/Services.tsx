import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CheckCircle, Sparkles, Shirt, Wind, Package } from "lucide-react";
import { LinkButton } from "../components/LinkButton";

export function Services() {
  const mainServices = [
    {
      icon: Package,
      title: "Wash, Dry & Fold",
      description:
        "Perfect for your everyday clothing needs. We carefully wash, dry, and neatly fold all your items.",
      features: [
        "Eco-friendly detergents",
        "Fabric softener included",
        "Sorted by color and fabric type",
        "Neatly folded and packaged",
        "24-48 hour turnaround",
      ],
      image:
        "https://www.ring2wash.com.au/cdn/shop/files/Wash_-Dry-_-Fold-Ring2Wash-39442185.png?v=1709699503",
    },
    {
      icon: Shirt,
      title: "Wash, Dry & Press",
      description:
        "For a polished, professional look. We wash, dry, and expertly press your garments to perfection.",
      features: [
        "Professional steam pressing",
        "Wrinkle-free finish",
        "Perfect for business attire",
        "Hung on hangers",
        "2-3 day turnaround",
      ],
      image:
        "https://images.unsplash.com/photo-1677312641701-0338f2be54a6?auto=format&fit=crop&w=1080&q=80",
    },
    {
      icon: Sparkles,
      title: "Dry Cleaning",
      description:
        "Specialized care for delicate fabrics and formal wear. Trust us with your most precious garments.",
      features: [
        "Gentle, chemical-free options available",
        "Perfect for suits, dresses, and delicates",
        "Stain treatment included",
        "Professional finishing",
        "3-5 day turnaround",
      ],
      image:
        "https://images.unsplash.com/photo-1551761429-8232f9f5955c?auto=format&fit=crop&w=1080&q=80",
    },
    {
      icon: Wind,
      title: "Pick-up & Delivery",
      description:
        "Ultimate convenience with free pickup and delivery service right to your doorstep.",
      features: [
        "Scheduled at your convenience",
        "Free within service area",
        "Contactless options available",
        "Real-time status updates",
        "Flexible delivery windows",
      ],
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1080&q=80",
    },
  ];

  const specialServices = [
    {
      title: "Comforters & Bedding",
      description: "Large item cleaning with special care",
    },
    {
      title: "Alterations & Repairs",
      description: "Professional tailoring services available",
    },
    {
      title: "Leather & Suede",
      description: "Specialized cleaning for premium materials",
    },
    {
      title: "Wedding Gowns",
      description: "Expert care for your special garments",
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_30%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            From everyday laundry to specialized dry cleaning, WhipWash offers
            comprehensive care for all your garments. Every service includes our
            commitment to quality and convenience.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                    <service.icon className="w-8 h-8 text-teal-700" />
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <LinkButton to="/pricing" size="lg">
                    View Pricing
                  </LinkButton>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-shadow duration-300 group">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Specialty Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We also offer specialized cleaning for unique items and special occasions
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-3xl p-12 sm:p-16 shadow-xl border border-teal-100">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
              Our Quality Commitment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">Professional Equipment</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We use only dependable, commercial-grade washing machines,
                  dryers, and ironing equipment to ensure the best results for your garments.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">Trained Staff</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our team is professionally trained to handle all types of fabrics
                  and garments with proper care, ensuring your clothes are always treated right.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">Eco-Friendly Options</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We offer environmentally conscious cleaning options using biodegradable detergents and energy-efficient processes.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">Satisfaction Guaranteed</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  If you're not completely satisfied with our service, we'll make it right.
                  Your satisfaction is our top priority.
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
            Ready to Try Our Services?
          </h2>
          <p className="text-xl text-teal-100 mb-10 leading-relaxed">
            Schedule your first pickup today and experience the WhipWash difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton
              to="/contact"
              size="lg"
              variant="secondary"
              className="shadow-2xl"
            >
              Schedule Pickup
            </LinkButton>
            <LinkButton
              to="/pricing"
              size="lg"
              variant="outline"
              className="bg-white/5 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/10"
            >
              View Pricing
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
}