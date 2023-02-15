import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import CheckOut from "./pages/CheckOut/CheckOut";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./Redex/Actions/userAction";
import toast, { Toaster } from "react-hot-toast";
import Profile from "./pages/Profile/Profile";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import ConfirmOrder from "./components/ConfirmOrder/ConfirmOrder";
import CreateProduct from "./pages/Admin/CreateProduct";
import AdminProducts from "./pages/Admin/AdminProducts";
import AdminUsers from "./pages/Admin/AdminUsers";
import SingleUser from "./components/SingleUser/SingleUser";
import ChangeProfile from "./components/ChangeProfile/ChangeProfile";
import { ProtectedRoute } from "protected-route-react";
import PaymentOrder from "./components/PaymentOrder/PaymentOrder";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./components/OrderSuccess/OrderSuccess";

function App() {
  const [stripeApiKey, setStripeApiKey] = useState("");
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }

  const dispatch = useDispatch();
  const { message, error, isAuthenticated, user } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(loadUser());
    getStripeApiKey();
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessages" });
    }

    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, error, message]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route
          path="/register"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect="/profile"
            >
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect="/profile"
            >
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change/password"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ChangePassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ChangeProfile user={user} />
            </ProtectedRoute>
          }
        />
        <Route path="/password/forget" element={<ForgetPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile user={user} />
            </ProtectedRoute>
          }
        />
        <Route path="/user/:id" element={<SingleUser />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <CheckOut user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/confirm/order"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ConfirmOrder user={user} />
            </ProtectedRoute>
          }
        />
        <Route path="/privacy-policy" element={<PrivatPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        {/* {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <Route path="/process/payment" element={<PaymentOrder />} />
          </Elements>
        )} */}
        {stripeApiKey && (
          <Route
            path="/process/payment"
            element={
              <Elements stripe={loadStripe(stripeApiKey)}>
                <PaymentOrder />
              </Elements>
            }
          />
        )}
        <Route
          path="/admin/createproduct"
          element={
            <ProtectedRoute
              adminRoute={true}
              isAuthenticated={isAuthenticated}
              isAdmin={user && user.role === "admin"}
            >
              <CreateProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <ProtectedRoute
              adminRoute={true}
              isAuthenticated={isAuthenticated}
              isAdmin={user && user.role === "admin"}
            >
              <AdminProducts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute
              adminRoute={true}
              isAuthenticated={isAuthenticated}
              isAdmin={user && user.role === "admin"}
            >
              <AdminUsers />
            </ProtectedRoute>
          }
        />
        <Route path="/success" element={<OrderSuccess />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
