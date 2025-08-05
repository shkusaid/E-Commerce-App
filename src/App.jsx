import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import CategoryProduct from "./pages/CategoryProduct";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import SingleProduct from "./pages/SingleProduct";

function App() {
  const [location, setLocation] = useState(null);
  const [openDropDown, setOpenDropDown] = useState(false);

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { longitude, latitude } = pos.coords;
        const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
        try {
          const response = await axios.get(url);
          const exactLocation = response.data.address;
          setLocation(exactLocation);
          setOpenDropDown(false);
        } catch (error) {
          console.error("Error fetching location data:", error);
        }
      },
      (err) => {
        console.error("Geolocation error:", err.message);
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <BrowserRouter>
      <Navbar
        location={location}
        getLocation={getLocation}
        openDropDown={openDropDown}
        setOpenDropDown={setOpenDropDown}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/category/:category" element={<CategoryProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={<Cart getLocation={getLocation} location={location} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
