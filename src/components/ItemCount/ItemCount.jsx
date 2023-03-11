import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const suma = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const resta = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
  return (
    <div>
      <h1>{contador}</h1>

      <button onClick={suma}>Suma</button>
      <button onClick={resta}>Resta</button>
      <button onClick={() => onAdd(contador)}>Agregar al carro</button>
    </div>
  );
};

export default ItemCount;
