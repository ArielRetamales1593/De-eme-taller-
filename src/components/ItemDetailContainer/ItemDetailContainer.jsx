import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

import Swal from "sweetalert2";
import { getDoc, doc, collection } from "firebase/firestore";
import { db } from "../../firebaseconfig";
import "./itemdetail.modules.css";
import ItemDetail from "../ItemDetail/ItemDetail";

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
  9;

  return (
    <div className="contenedor">
      <ItemDetail
        productoSelect={productoSelect}
        onAdd={onAdd}
        quantity={quantity}
      />
    </div>
  );
};

export default ItemDetailContainer;
