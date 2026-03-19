import { LinkButton } from "../components/LinkButton";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Sparkles, Shirt, Truck, Clock, Star } from "lucide-react";

export function Home() {
  const features = [
    {
      icon: Sparkles,
      title: "Premium Care",
      description:
        "Dependable equipment and trained staff ensure your clothes are handled with care",
    },
    {
      icon: Shirt,
      title: "Full Service",
      description:
        "From wash & fold to dry cleaning, we handle all your laundry needs",
    },
    {
      icon: Truck,
      title: "Pick-up & Delivery",
      description:
        "Free pickup and delivery right to your doorstep for ultimate convenience",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description:
        "Most orders ready within 24-48 hours, so you're never without clean clothes",
    },
  ];

  const services = [
    {
      title: "Wash, Dry & Fold",
      description: "We'll wash, dry, and neatly fold your everyday clothes",
      image:
        "https://images.unsplash.com/photo-1764120656278-994739787d38?auto=format&fit=crop&w=1080&q=80",
    },
    {
      title: "Wash, Dry & Press",
      description: "Professional pressing for wrinkle-free, crisp garments",
      image:
        "https://images.unsplash.com/photo-1677312641701-0338f2be54a6?auto=format&fit=crop&w=1080&q=80",
    },
    {
      title: "Dry Cleaning",
      description: "Specialized cleaning for delicate and formal wear",
      image:
        "https://images.unsplash.com/photo-1551761429-8232f9f5955c?auto=format&fit=crop&w=1080&q=80",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Schedule Pickup",
      description: "Choose a convenient time for us to collect your laundry",
    },
    {
      number: "02",
      title: "We Clean",
      description:
        "Our trained staff carefully wash, dry, and prepare your items",
    },
    {
      number: "03",
      title: "We Deliver",
      description: "Fresh, clean clothes delivered right back to your door",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "WhipWash has been a lifesaver! The quality is excellent and the convenience is unbeatable.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      text: "Professional service at reasonable prices. My business shirts have never looked better.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      text: "The pickup and delivery service is so convenient. I'll never do my own laundry again!",
      rating: 5,
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_30%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
                <Sparkles className="w-4 h-4" />
                <span>Trusted by 500+ Happy Customers</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Fresh Laundry, <br />
                <span className="bg-gradient-to-r from-teal-200 to-white bg-clip-text text-transparent">
                  Zero Hassle
                </span>
              </h1>

              <p className="text-xl text-teal-50 leading-relaxed max-w-xl">
                Professional laundry and dry cleaning service for busy individuals.
                We pick up, clean, and deliver your clothes so you can focus on
                what matters.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <LinkButton
                  to="/contact"
                  size="lg"
                  variant="secondary"
                  className="shadow-xl shadow-teal-900/20"
                >
                  Schedule Pickup
                </LinkButton>
                <LinkButton
                  to="/services"
                  size="lg"
                  variant="outline"
                  className="bg-white/5 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/10"
                >
                  View Services
                </LinkButton>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex flex-col gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-teal-100 font-medium">
                    500+ Happy Customers
                  </p>
                </div>
                <div className="h-12 w-px bg-white/20" />
                <div>
                  <p className="text-3xl font-bold">24-48hrs</p>
                  <p className="text-sm text-teal-100">Average Turnaround</p>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551761429-8232f9f5955c?auto=format&fit=crop&w=1080&q=80"
                  alt="Modern laundry machines"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Why Choose WhipWash?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best laundry experience with
              quality care and unmatched convenience
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-teal-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From everyday laundry to delicate dry cleaning, we've got you covered
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6 h-72 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed px-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <LinkButton to="/services" size="lg" className="shadow-lg">
              Explore All Services
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-teal-50 via-teal-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting fresh, clean clothes has never been easier
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center border border-gray-100">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 text-white text-3xl font-bold mb-6 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-5 w-10 h-1 bg-gradient-to-r from-teal-300 to-transparent" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <LinkButton to="/contact" size="lg" className="shadow-lg">
              Get Started Today
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-900 text-lg">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_30%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Experience Hassle-Free Laundry?
          </h2>
          <p className="text-xl text-teal-100 mb-10 leading-relaxed">
            Join hundreds of satisfied customers who trust WhipWash with their laundry
          </p>
          <LinkButton
            to="/contact"
            size="lg"
            variant="secondary"
            className="shadow-2xl"
          >
            Schedule Your First Pickup
          </LinkButton>
        </div>
      </section>
    </div>
  );
}