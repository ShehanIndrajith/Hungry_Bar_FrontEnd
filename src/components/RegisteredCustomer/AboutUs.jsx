import React, { memo } from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import {
  ChefHat,
  Clock,
  Heart,
  Star,
  Truck,
  Wallet,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <div className="absolute inset-0 bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
            alt="Pizza Kitchen"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Story
            </h1>
            <p className="text-xl text-white">
              Discover the passion behind every slice
            </p>
          </div>
        </div>
      </div>
      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Journey
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2023, Hungry Bar started as a small family-owned
                pizzeria with a big dream: to serve the most delicious and
                authentic pizzas in town.
              </p>
              <p className="text-gray-600">
                What began as a modest kitchen has grown into a beloved
                establishment, thanks to our commitment to quality ingredients
                and traditional recipes passed down through generations.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1542834369-f10ebf06d3e0"
                alt="Restaurant Interior"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <Heart className="w-12 h-12 text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              To deliver the freshest, most delicious pizzas with a focus on
              quality and customer satisfaction, creating memorable dining
              experiences for every customer.
            </p>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marco Rossi",
                role: "Head Chef",
                image:
                  "https://images.unsplash.com/photo-1583394838336-acd977736f90",
              },
              {
                name: "Sarah Johnson",
                role: "Restaurant Manager",
                image:
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956",
              },
              {
                name: "David Chen",
                role: "Pizza Specialist",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Hungry Bar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ChefHat,
                title: "Expert Chefs",
                description:
                  "Our pizzas are crafted by experienced professionals",
              },
              {
                icon: Star,
                title: "Quality Ingredients",
                description:
                  "We use only the freshest, highest-quality ingredients",
              },
              {
                icon: Clock,
                title: "Fast Service",
                description: "Quick preparation without compromising quality",
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                description: "Hot and fresh pizza delivered to your doorstep",
              },
              {
                icon: Wallet,
                title: "Affordable Prices",
                description:
                  "Great value for money without compromising quality",
              },
              {
                icon: Heart,
                title: "Made with Love",
                description: "Every pizza is made with passion and care",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <feature.icon className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Emily Thompson",
                review:
                  "The best pizza in town! The crust is perfect and the toppings are always fresh.",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
              },
              {
                name: "Michael Brown",
                review:
                  "Amazing service and even better pizza. This is our family's favorite pizza place!",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
              },
              {
                name: "Lisa Chen",
                review:
                  "The authentic taste and quality ingredients make this place special. Highly recommended!",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Taste the Difference?
          </h2>
          <button className="bg-white text-red-500 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Order Now
          </button>
        </div>
      </section>
      {/* Footer */}
      <Footer/>
    </div>
  );
};