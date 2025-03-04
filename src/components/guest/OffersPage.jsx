import React, { useState } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Clock, Tag, Check, ArrowRight,Pizza, Menu, X, ShoppingCart, Facebook, Instagram, Twitter } from "lucide-react";

export const OffersPage = () => {
  const [appliedOffers, setAppliedOffers] = useState([]);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  const offers = [
    {
      id: 1,
      title: "Buy 1 Get 1 Free Pizza",
      description: "Order any large pizza and get another one absolutely free!",
      expiresIn: "2 days",
      promoCode: "PIZZA2X",
      discount: "50%",
      image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
      badge: "🔥 Most Popular",
    },
    {
      id: 2,
      title: "Family Feast Deal",
      description: "2 Large Pizzas + 2 Sides + 2 Drinks at a special price",
      expiresIn: "3 days",
      promoCode: "FAMILY20",
      discount: "20%",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      badge: "👨‍👩‍👧‍👦 Family Special",
    },
    {
      id: 3,
      title: "Weekend Special",
      description: "Get 25% off on all orders above $30",
      expiresIn: "5 days",
      promoCode: "WEEKEND25",
      discount: "25%",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47",
      badge: "💥 Best Deal",
    },
    {
      id: 4,
      title: "Free Delivery",
      description: "Free delivery on all orders above $20",
      expiresIn: "7 days",
      promoCode: "FREEDEL",
      discount: "Free Delivery",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
    },
  ];

  const handleApplyOffer = (offerId) => {
    if (appliedOffers.includes(offerId)) {
      setAppliedOffers(appliedOffers.filter((id) => id !== offerId));
    } else {
      setAppliedOffers([...appliedOffers, offerId]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
        <Header/>
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Offers background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hot Deals & Delicious Discounts!
          </h1>
          <p className="text-xl md:text-2xl">
            Discover amazing offers and save big on your favorite meals
          </p>
        </div>
      </div>

      {/* Offers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                {offer.badge && (
                  <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {offer.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Clock className="h-4 w-4" />
                  <span>Expires in {offer.expiresIn}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium mb-6">
                  <Tag className="h-4 w-4 text-red-500" />
                  <span>Use code: </span>
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    {offer.promoCode}
                  </span>
                </div>
                <button
                  onClick={() => handleApplyOffer(offer.id)}
                  className={`w-full py-2 rounded-lg transition-colors ${
                    appliedOffers.includes(offer.id)
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-red-500 hover:bg-red-600 text-white"
                  }`}
                >
                  <span className="flex items-center justify-center">
                    {appliedOffers.includes(offer.id) ? (
                      <>
                        <Check className="h-5 w-5 mr-2" />
                        Applied
                      </>
                    ) : (
                      "Apply to Cart"
                    )}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            How to Claim Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Select Offer",
                description: "Choose from our amazing deals",
              },
              {
                step: "2",
                title: "Add to Cart",
                description: "Add qualifying items to your cart",
              },
              {
                step: "3",
                title: "Enjoy Savings",
                description: "Discount applies automatically at checkout",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 2 && (
                  <ArrowRight className="hidden md:block h-6 w-6 text-red-500 absolute transform translate-x-48" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};