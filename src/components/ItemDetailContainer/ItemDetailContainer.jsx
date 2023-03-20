import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";
import Styles from "../ItemListPres/item.module.css";

const ItemDetailContainer = () => {
  const onAdd = (cantidad) => {
    alert(`se agregaron ${cantidad} productos al carrito de compra`);
    console.log(`se agregaron ${cantidad} elementos al carrito`);
  };

  const { id } = useParams();

  const productoSelect = products.find((element) => element.id === Number(id));

  console.log(productoSelect);

  return (
    <div className="contenedor">
      <h2> {productoSelect.title}</h2>
      <img className={Styles.img} src={productoSelect.img} alt="" />
      <p> {productoSelect.description}</p>
      <p> Tipo de mueble: {productoSelect.category}</p>
      <h3> valor :${productoSelect.price}</h3>

      <ItemCount stock={productoSelect.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
