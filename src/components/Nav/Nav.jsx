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
        variant="outlined"
        aria-label="outlined primary button group"
      >
        <Link to="/" className="li">
          {" "}
          <Button className="button">Inicio</Button>{" "}
        </Link>
        <Link to="/category/dormitorio">
          {" "}
          <Button className="button">Dormitorio</Button>{" "}
        </Link>
        <Link to="/category/living">
          {" "}
          <Button className="button">Living</Button>{" "}
        </Link>
      </ButtonGroup>

      <CartWidget />
    </div>
  );
};

export default Nav;
