import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalElementos } = useContext(CartContext);
  const total = totalElementos();

  return (
    <div>
      <span>{total}</span>
      <Link to="cart">
        <ShoppingCartIcon />
      </Link>
    </div>
  );
};

export default CartWidget;
