import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {
  Pizza,
  Menu,
  X,
  ShoppingCart,
  User,
  Search,
  Star,
  Facebook,
  Instagram,
  Twitter,
  CreditCard,
  Package,
} from "lucide-react";


// Hero Component
export const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/menupage?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="relative h-[600px] flex items-center justify-center text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
          alt="Pizza background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Craving the Best Pizza?
          <br />
          We've Got You Covered!
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Explore a variety of pizzas, burgers, and more from top restaurants
          near you.
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for your favorite pizza..."
              className="w-full px-6 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-red-500 rounded-full hover:bg-red-600"
            >
              <Search className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Categories Component
export const Categories = () => {
  const categories = [
    {
      name: "Pizza",
      icon: "🍕",
    },
    {
      name: "Burgers",
      icon: "🍔",
    },
    {
      name: "Salads",
      icon: "🥗",
    },
    {
      name: "Desserts",
      icon: "🍰",
    },
    {
      name: "Drinks",
      icon: "🥤",
    },
    {
      name: "Sides",
      icon: "🍟",
    },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
            >
              <span className="text-4xl mb-4">{category.icon}</span>
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export const FeaturedRestaurants = () => {

  const navigate = useNavigate();
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/HungryBarFinal/pizzas')
      .then(response => response.json())
      .then(data => setPizzas(data))
      .catch(error => console.error('Error fetching pizzas:', error));
  }, []);

  const handleAddToCart = (itemID) => {
    navigate(`/addtocart?itemID=${itemID}`);
  };
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Our Pizza Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pizzas.map(pizza => (
          <div key={pizza.itemID} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={pizza.imageURL || "https://images.unsplash.com/photo-1574071318508-1cdbab80d002"}
              alt={pizza.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{pizza.name}</h3>
                <span className="text-red-500 font-bold">${pizza.price.toFixed(2)}</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{pizza.description}</p>
              <button onClick={() => handleAddToCart(pizza.itemID)} className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// SpecialOffers Component
export const SpecialOffers = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Special Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Family Weekend Deal</h3>
              <p className="text-gray-600 mb-4">
                Get 2 Large Pizzas + 2 Sides + 4 Drinks
              </p>
              <span className="text-2xl font-bold text-red-500 block mb-4">
                $49.99
              </span>
              <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors">
                Order Now
              </button>
            </div>
            <div className="hidden md:block w-1/3">
              <img
                src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee"
                alt="Deal"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// HowItWorks Component
export const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-12 h-12 text-red-500" />,
      title: "Browse",
      description: "Explore restaurants & menus",
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-red-500" />,
      title: "Order",
      description: "Add items & customize",
    },
    {
      icon: <CreditCard className="w-12 h-12 text-red-500" />,
      title: "Pay",
      description: "Select payment method & confirm",
    },
    {
      icon: <Package className="w-12 h-12 text-red-500" />,
      title: "Enjoy",
      description: "Track order & receive delivery",
    },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// Main GuestHomePage Component
const GuestHomePage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <Categories />
      <FeaturedRestaurants />
      <SpecialOffers />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default GuestHomePage;
