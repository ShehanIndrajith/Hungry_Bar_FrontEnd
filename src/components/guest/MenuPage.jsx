import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {
  Search,
  Pizza,
  Menu,
  X,
  Facebook,
  Instagram,
  Twitter,
  ShoppingCart,
} from "lucide-react";

export const MenuPage = () => {
   const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");
  const [menuItems, setMenuItems] = useState([]);
  const [noItemsFound, setNoItemsFound] = useState(false);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  // Fetch menu items from the API
  useEffect(() => {
    fetch('http://localhost:8080/HungryBarFinal/getMenuItems')
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setMenuItems(data); // Set the fetched data to `menuItems`
          setNoItemsFound(false); // Ensure `noItemsFound` is false
        } else {
          setNoItemsFound(true); // If no items are found, set `noItemsFound` to true
        }
      })
      .catch((error) => {
        console.error('Error fetching menu items:', error);
        setNoItemsFound(true); // Handle errors by showing "No items found"
      });
  }, []); // Empty dependency array ensures this runs only once on component mount

  // Default menu items
  const defaultmenuItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      category: "pizza",
      price: 14.99,
      description: "Fresh tomatoes, mozzarella, basil, and olive oil",
      image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      category: "pizza",
      price: 16.99,
      description: "Classic pepperoni with mozzarella and tomato sauce",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Garden Salad",
      category: "sides",
      price: 8.99,
      description: "Mixed greens with cherry tomatoes and house dressing",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      rating: 4.5,
    },
    {
      id: 4,
      name: "Craft Cola",
      category: "drinks",
      price: 3.99,
      description: "Artisanal cola with natural ingredients",
      image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13",
      rating: 4.7,
    },
  ];

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/HungryBarFinal/search?query=${query}`
        );
        const data = await response.json();

        if (data.message) {
          // No items found
          setNoItemsFound(true);
          setMenuItems([]);
        } else {
          // Items found
          setNoItemsFound(false);
          setMenuItems(data);
        }
      } catch (error) {
        console.error("Error fetching menu items:", error);
        setNoItemsFound(true);
      }
    };

    if (query) {
      fetchMenuItems();
    } else {
      // If no query, set default menu items
      setMenuItems(defaultmenuItems);
      setNoItemsFound(false);
    }
  }, [query]);

  const handleAddToCart = (itemID) => {
    navigate(`/addtocart?itemID=${itemID}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Menu Hero Section */}
      <div className="relative mt-16 h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1590947132387-155cc02f3212"
            alt="Menu background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Our Delicious Menu
          </h1>
          <p className="text-xl md:text-2xl">
            Discover a world of flavors, crafted just for you
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search menu items..."
              className="w-full px-4 py-2 pl-10 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="all">All Categories</option>
              <option value="pizza">Pizza</option>
              <option value="sides">Sides</option>
              <option value="drinks">Drinks</option>
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="popularity">Most Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">
            {query ? `Search Results for "${query}"` : "Our Menu"}
          </h1>
          {noItemsFound ? (
            <div className="text-center text-gray-600">
              <p>No items found for your search.</p>
              <p>Please try a different search term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.map((item) => (
                <div
                  key={item.itemID} // Use `id` for default items and `itemID` for fetched items
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={item.imageURL} // Use `image` for default items and `imageURL` for fetched items
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <span className="font-bold text-red-500">
                        ${item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {item.description}
                    </p>
                    <button onClick={() => handleAddToCart(item.itemID)} className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};