import React from "react";
import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";
import logo from "../../img/logo1.png";

import "./Nav.css";
import CartWidget from "../CartWidget/CartWidget";

const Nav = () => {
  return (
    <div className="container_navbar">
      <img className="img_logo" src={logo} alt="1" />

      <ButtonGroup
        className="nav_group"
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button className="button">Inicio</Button>
        <Button className="button">Nosotros</Button>
        <Button className="button">Productos</Button>
      </ButtonGroup>

      <CartWidget />
    </div>
  );
};

export default Nav;
