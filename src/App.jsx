import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { getAllProducts } from "./api";
import { SingleProduct } from "./components/SingleProduct";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Cart } from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getAllProducts();

      setProducts(response);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <h1>Catazon</h1>

      <div className="container">
        {products?.map((product) => {
          return (
            <>
              <div className="box">
                <div className="content">
                  <h5>{product.title}</h5>
                </div>
                <img src={product.image} alt="" />
                <p>{product.price}</p>
                <button>Add to cart</button>
              </div>
              ;
            </>
          );
        })}
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route
            path="/singleproduct"
            element={<SingleProduct products={products} />}
          />
          <Route path="/cart" element={<Cart products={products} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
