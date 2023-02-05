import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import PrivatPolicy from "./pages/PrivatPolicy/PrivatPolicy";
import RefundPolicy from "./pages/RefundPolicy/RefundPolicy";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import Cart from "./pages/Cart/Cart";
import { Toaster } from "react-hot-toast";
import CheckOut from "./pages/CheckOut/CheckOut";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/privacy-policy" element={<PrivatPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
