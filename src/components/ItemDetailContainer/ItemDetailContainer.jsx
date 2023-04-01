import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { products } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";
import Styles from "../ItemListPres/item.module.css";
import Swal from "sweetalert2";
import { getDoc, doc, collection } from "firebase/firestore";
import { db } from "../../firebaseconfig";

const ItemDetailContainer = () => {
  const onAdd = (cantidad) => {
    let producto = {
      ...productoSelect,
      quantity: cantidad,
    };
    agregarAlcarrito(producto);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado correctamente",

      timer: 1500,
    });
    console.log(producto);
  };

  const { id } = useParams();

  const { agregarAlcarrito, getQuantityById } = useContext(CartContext);

  const [productoSelect, setproductoSelect] = useState({});

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const ref = doc(itemCollection, id);
    getDoc(ref).then((res) => {
      setproductoSelect({
        ...res.data(),
        id: res.id,
      });
    });
  }, [id]);

  // const productoSelect = products.find((element) => element.id === Number(id));

  let quantity = getQuantityById(Number(id));

  return (
    <div className="contenedor">
      <h2> {productoSelect.title}</h2>
      <img className={Styles.img} src={productoSelect.img} alt="" />
      <p> {productoSelect.description}</p>
      <p> Tipo de mueble: {productoSelect.category}</p>
      <h3> valor :${productoSelect.price}</h3>

      <ItemCount
        stock={productoSelect.stock}
        onAdd={onAdd}
        initial={quantity}
      />
    </div>
  );
};

export default ItemDetailContainer;
