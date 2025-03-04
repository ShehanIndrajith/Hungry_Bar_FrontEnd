import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./Layout/Header"
import Footer from "./Layout/Footer";
import {
  ShoppingCart,
  User,
  ChevronDown,
  Bike,
  Pizza,
  Clock,
  Star,
  Plus,
  ChevronRight,Facebook,
  Instagram,
  Twitter,
  ArrowRight,CreditCard,
  Package,
  Search,
  Gift,
} from "lucide-react";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/menu');
  };

  const handleTrackOrder = () => {
    navigate('/track-order');
  }

  const handlePastOrder = () => {
    navigate('/order-history');
  }

   const [pizzas, setPizzas] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:8080/HungryBarFinal/pizzas')
        .then(response => response.json())
        .then(data => setPizzas(data))
        .catch(error => console.error('Error fetching pizzas:', error));
    }, []);
  
    const handleAddToCart = (itemID) => {
      navigate(`/add-to-cart?itemID=${itemID}`);
    };

  const [isProfileOpen, setIsProfileOpen] = useState(false);
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



  const promotions = [
    {
      id: 1,
      title: "Weekend Special",
      description: "Get 20% off on all large pizzas",
      code: "WEEKEND20",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "Family Bundle",
      description: "Buy 2 large pizzas, get 1 medium free",
      code: "FAMILY2024",
      image:
        "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=400&h=250&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      
    <Header/>
      <div
        className="relative bg-cover bg-center h-[400px]"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=1600&h=800&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome Back, John!
              </h1>
              <p className="text-xl mb-8">
                Ready to order your favorite pizza?
              </p>
              <button onClick={handleOrderNow} className="bg-red-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-red-600 transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button onClick={handleTrackOrder} className="bg-white p-6 rounded-xl border hover:shadow-md transition-shadow group">
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-200 transition-colors">
                <Bike className="w-6 h-6 text-red-500" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Track Your Order</h3>
                <p className="text-sm text-gray-600">See where your pizza is</p>
              </div>
            </div>
          </button>
          <button onClick={handleOrderNow} className="bg-white p-6 rounded-xl border hover:shadow-md transition-shadow group">
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-200 transition-colors">
                <Pizza className="w-6 h-6 text-red-500" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Explore the Menu</h3>
                <p className="text-sm text-gray-600">
                  Browse our delicious pizzas
                </p>
              </div>
            </div>
          </button>
          <button onClick={handlePastOrder} className="bg-white p-6 rounded-xl border hover:shadow-md transition-shadow group">
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-200 transition-colors">
                <Clock className="w-6 h-6 text-red-500" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">View Past Orders</h3>
                <p className="text-sm text-gray-600">
                  Check your order history
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Our Pizza Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pizzas.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden border hover:shadow-md transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{item.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">${item.price}</span>
                    <button onClick={() => handleAddToCart(item.itemID)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-2">
                      <Plus className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Exclusive Offers for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="bg-white rounded-xl overflow-hidden border hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                    <p className="mb-2">{promo.description}</p>
                    <div className="bg-white/20 px-3 py-1 rounded text-sm inline-block backdrop-blur-sm">
                      Code: {promo.code}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
                  Redeem Now
                </button>
                <button className="text-gray-600 hover:text-gray-900 flex items-center">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Footer */}
      <Footer/>
    </div>
  );
};