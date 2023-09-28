import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="buttons">
        <Link to="/home">
          {" "}
          <button>Home</button>
        </Link>

        <Link to="/AccountForm">
          <button>Sign Up</button>
        </Link>
        <Link to="/Cart">
          <button>Cart</button>
        </Link>
      </div>
    </div>
  );
};
