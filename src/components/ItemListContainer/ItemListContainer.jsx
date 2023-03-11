import React, { useEffect, useState } from "react";

import { products } from "../../productsMock";
import ItemList from "../ItemListPres/ItemList";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  // la promesa viene del backend
  useEffect(() => {
    const producList = new Promise((resolve, reject) => {
      resolve(products);
    });
    // resolver promesa
    producList
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(items);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
