import React from "react";
import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";
import logo from "../../img/logo1.png";
import { Link } from "react-router-dom";

import "./Nav.css";
import CartWidget from "../CartWidget/CartWidget";

const Nav = () => {
  return (
    <div className="container_navbar">
      <Link to="/">
        <img className="img_logo" src={logo} alt="1" />
      </Link>

      <ButtonGroup
        className="nav_group"
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Link to="/">
          <Button className="button">Inicio</Button>
          <Button className="button">Nosotros</Button>

          <Button className="button">Productos</Button>
        </Link>
      </ButtonGroup>

      <CartWidget />
    </div>
  );
};

export default Nav;
