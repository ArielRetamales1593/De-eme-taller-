import React from "react";
import asc from "../../img/svg.svg";
import { Link } from "react-router-dom";
import "./empty.css";

const Empty = () => {
  return (
    <div className="cont">
      <h3>Tu carrito está vacio </h3>
      <img src={asc} alt="" width={"300px"} />
      <Link className="sc" to="/">
        Seguir Comprando
      </Link>
    </div>
  );
};

export default Empty;
