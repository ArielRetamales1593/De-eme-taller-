import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ productoSelect, onAdd, quantity }) => {
  return (
    <div>
      <div className="contenedor">
        <h2> {productoSelect.title}</h2>
        <img className="img" src={productoSelect.img} alt="" />
        <p className="desc"> {productoSelect.description}</p>
        <p> Tipo de mueble: {productoSelect.category}</p>
        <h3> valor :${productoSelect.price}</h3>

        <ItemCount
          stock={productoSelect.stock}
          onAdd={onAdd}
          initial={quantity}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
