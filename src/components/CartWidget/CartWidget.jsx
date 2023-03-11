import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <span>0</span>
      <Link to="cart">
        <ShoppingCartIcon />
      </Link>
    </div>
  );
};

export default CartWidget;
