import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Header/Navbar";
import Form from "./pages/Form/Form";

import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product_category/Product";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import Electronics from "./pages/Electronics/Electronics";
import Jewelery from "./pages/Jewelery/Jewelery";
import Footer from "./components/Footer/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const isProduct = cart.find((findItem) => findItem.id === product.id);
    if (isProduct) {
      const updateCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updateCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleInc = (id) => {
    const IncItem = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(IncItem);
  };

  const handleDec = (id) => {
    const DecItem = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setCart(DecItem);
  };
  return (
    <>
      <Navbar size={cart.length} />
      <Routes>
        <Route path="/React-project-E-commerce/" element={<Home addToCart={addToCart} />} />
       
        <Route path="/React-project-E-commerce/product" element={<Product addToCart={addToCart} />} />
        <Route path="/React-project-E-commerce/men" element={<Men addToCart={addToCart} />} />
        <Route path="/React-project-E-commerce/women" element={<Women addToCart={addToCart} />} />
        <Route
          path="/React-project-E-commerce/electronics"
          element={<Electronics addToCart={addToCart} />}
        />
        <Route path="/React-project-E-commerce/jewelery" element={<Jewelery addToCart={addToCart} />} />

        <Route
          path="/React-project-E-commerce/productDetails/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />
        <Route path="/React-project-E-commerce/contact" element={<Form />} />
        <Route
          path="/React-project-E-commerce/cart"
          element={
            <Cart cart={cart} handleDec={handleDec} handleInc={handleInc} />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}
export default App;