import React from "react";

const ProductCard = (props) => {
  // desestructuracion de objeto
  let { title, valor, color } = props;

  return (
    <div>
      {props.valor > 500 ? (
        <div>
          Este es el funcionamiento con el if ternario con los props mayor a 500
        </div>
      ) : null}
      <h1> {title}</h1>
      <ul>
        <li>{valor}</li>
        <li>{color}</li>
      </ul>
    </div>
  );
};

export default ProductCard;
