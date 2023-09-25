import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { getAllProducts } from "./api";

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
    </>
  );
}

export default App;
