import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./components/guest/LoginPage.jsx";
import { RegisterPage } from "./components/guest/RegisterPage.jsx";
import { HomePage } from "./components/RegisteredCustomer/HomePage.jsx";
import { AboutPage } from "./components/guest/AboutPage.jsx";
import { ProfilePage } from "./components/RegisteredCustomer/ProfilePage.jsx";
import { AddToCartPage } from "./components/guest/AddToCartPage.jsx";
import  EditProfilePage  from "./components/RegisteredCustomer/EditProfilePage.jsx";
import { Cart } from "./components/RegisteredCustomer/Cart.jsx";
import GuestHomePage from "./components/guest/GuestHomePage.jsx";
import { CustomerSupport } from "./components/guest/CustomerSupport.jsx";
import { MenuPage } from "./components/guest/MenuPage.jsx";
import { CartPage } from "./components/guest/CartPage.jsx";
import { CheckoutPage } from "./components/guest/CheckoutPage.jsx";
import { OffersPage } from "./components/guest/OffersPage.jsx";
import { TrackOrderPage } from "./components/RegisteredCustomer/TrackOrderPage.jsx";
import { OrderHistoryPage } from "./components/RegisteredCustomer/OrderHistoryPage.jsx";
import { CustomerDashboard } from "./components/RegisteredCustomer/CustomerDashboard.jsx";
import { CustomerSupportPage } from "./components/RegisteredCustomer/CustomerSupportPage.jsx";
import { RegisteredMenu } from "./components/RegisteredCustomer/RegisteredMenu.jsx";
import { DashboardOverview } from "./components/Admin/DashboardOverview.jsx";
import { Manager } from "./components/Manager/Manager.jsx";
import { StaffLogin } from "./components/StaffLogin.jsx";
import { OrderSuccessPage } from "./components/RegisteredCustomer/OrderSuccessPage.jsx";
import ErrorPage from "./components/RegisteredCustomer/ErrorPage.jsx";
import RegCheckoutPage from "./components/RegisteredCustomer/RegCheckoutPage.jsx";
import { AboutUs } from "./components/RegisteredCustomer/AboutUs.jsx";
import DeliveryStaffDashboard from "./components/DeliveryStaff/DeliveryStaffDashboard.jsx";
import { AddToCart } from "./components/RegisteredCustomer/AddToCart.jsx";
import {UsersPage} from "./components/Admin/UsersPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Guest Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/menupage" element={<MenuPage />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/guesthome" element={<GuestHomePage />} />
        <Route path="/contact" element={<CustomerSupport />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/addtocart" element={<AddToCartPage />} />

        {/* Registered Customer Routes */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<RegisteredMenu />} />
        <Route path="/profile/:userID" element={<ProfilePage />} />
        <Route path="/edit-profile/:userID" element={<EditProfilePage />} />
        <Route path="/track-order" element={<TrackOrderPage />} />
        <Route path="/order-history" element={<OrderHistoryPage />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/customer-support" element={<CustomerSupportPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />
        <Route path="/error" element={<ErrorPage/>} />
        <Route path="/check-out" element={<RegCheckoutPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/add-to-cart" element={<AddToCart />} />

        {/* Staff Routes */}
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/user-page" element={<UsersPage/>}/>
        <Route path="/admin-dashboard" element={<DashboardOverview />} />
        <Route path="/manager-dashboard" element={<Manager />} />

        {/* Delivery Staff Dashboard */}
        <Route path="/delivery-dashboard" element={<DeliveryStaffDashboard />} />

        {/* Default Route */}
        <Route path="/" element={<DeliveryStaffDashboard />}  />
      </Routes>
    </Router>
  );
}

export default App;