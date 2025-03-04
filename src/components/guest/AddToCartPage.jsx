import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import {
  ChevronLeft,
  Minus,
  Plus,
  UtensilsCrossed,
  AlertCircle,
} from "lucide-react";

export const AddToCartPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState("");

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, Math.min(10, value));
    setQuantity(newQuantity);
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const itemID = searchParams.get('itemID');

  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    if (itemID) {
      fetch(`http://localhost:8080/HungryBarFinal/pizza-details?itemID=${itemID}`)
        .then(response => response.json())
        .then(data => setPizza(data))
        .catch(error => console.error('Error fetching pizza details:', error));
    }
  }, [itemID]);

  const handleAddToCart = () => {
    const cartItem = {
      cartID: 1, // Replace with actual CartID or fetch it from the session
      itemID: pizza.itemID,
      quantity: quantity,
      specialInstructions: specialInstructions,
    };

    fetch('http://localhost:8080/HungryBarFinal/addToCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(cartItem),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === "success") {
          alert("Item added to cart successfully!");
        } else {
          alert("Failed to add item to cart.");
        }
      })
      .catch(error => {
        console.error('Error adding item to cart:', error);
        alert("An error occurred while adding the item to the cart.");
      });
  };

  if (!pizza) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back
        </button>
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-[300px] lg:h-full">
              <img
                src={pizza.imageURL || "https://images.unsplash.com/photo-1574071318508-1cdbab80d002"}
                alt={pizza.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
            </div>
            {/* Details Section */}
            <div className="p-6 lg:p-8">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {pizza.name}
                </h1>
                <p className="text-gray-600 mb-4">
                  {pizza.description}
                </p>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <UtensilsCrossed className="w-4 h-4" />
                  <span>Serves 2-3 people</span>
                </div>
              </div>
              {/* Price and Quantity */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    LKR : {pizza.price}
                  </span>
                  <div className="flex items-center border border-gray-200 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="p-2 hover:bg-gray-50 text-gray-600"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) =>
                        handleQuantityChange(Number(e.target.value))
                      }
                      className="w-16 text-center border-x border-gray-200 py-2 focus:outline-none"
                    />
                    <button
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="p-2 hover:bg-gray-50 text-gray-600"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  Total: LKR {(pizza.price * quantity).toFixed(2)}
                </div>
              </div>
              {/* Special Instructions */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Instructions
                </label>
                <textarea
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder="Add special instructions (optional)"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-300"
                  rows={3}
                />
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => window.history.back()}
                  className="flex-1 px-6 py-3 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  Add to Cart - LKR{(pizza.price * quantity).toFixed(2)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};