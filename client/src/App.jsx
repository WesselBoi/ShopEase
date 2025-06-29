import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx"; 
import Profile from "./pages/Profile.jsx"
import { useAuthPersist } from './hooks/useAuthPersist';
import Shipping from "./pages/Shipping.jsx"
import Payment from './pages/Payment';
import PlaceOrder from './pages/PlaceOrder';
// import OrderDetails from './pages/OrderDetails';
import MyOrders from './pages/MyOrders.jsx';
import OrderSuccessfull from './pages/OrderSuccessfull.jsx';

function App() {
    useAuthPersist();       // hook to restore auth state on app load

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        {/* <Route path="/order/:id" element={<OrderDetails />} /> */}
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/ordersuccessfull" element={<OrderSuccessfull />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
