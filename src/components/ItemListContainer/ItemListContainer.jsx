import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { products } from "../../productsMock";
import ItemList from "../ItemListPres/ItemList";

const ItemListContainer = (props) => {
  const { categoryName } = useParams();
  // recupero con el usem param info de las rutas
  // al boton inicio muestra todo pero aparece como undefined
  // si llega name copmo undifened se van a mostrar todas las rutas

  const productosFiltrados = products.filter(
    (elemento) => elemento.category === categoryName
  );

  const [items, setItems] = useState([]);

  console.log(categoryName);

  // la promesa viene del backend
  useEffect(() => {
    const producList = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : products);
    });
    // resolver promesa
    producList
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryName]);

  console.log(items);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
