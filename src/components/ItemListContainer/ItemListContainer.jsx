import React from "react";
import { Button } from "@mui/material";

const ItemListContainer = (props) => {
  const saludar = () => {
    alert("Hola muy buenos dias.");
  };

  let { greeting } = props;
  return (
    <div>
      <h2> {greeting} </h2>

      <Button onClick={saludar}> Bienvenido </Button>
    </div>
  );
};

export default ItemListContainer;
