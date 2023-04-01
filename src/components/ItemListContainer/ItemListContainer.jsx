import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { products } from "../../productsMock";
import ItemList from "../ItemListPres/ItemList";
import { db } from "../../firebaseconfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const override = {
  display: "block",
  margin: "0 auto",
  marginTop: "150px",
};

const ItemListContainer = (props) => {
  const { categoryName } = useParams();
  // recupero con el usem param info de las rutas
  // al boton inicio muestra todo pero aparece como undefined
  // si llega name copmo undifened se van a mostrar todas las rutas

  const productosFiltrados = products.filter(
    (elemento) => elemento.category === categoryName
  );

  const [items, setItems] = useState([]);

  // la promesa viene del backend
  useEffect(() => {
    const itemCollection = collection(db, "products");

    if (categoryName) {
      const q = query(itemCollection, where("category", "==", categoryName));

      getDocs(q).then((res) => {
        let products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setItems(products);
      });
    } else {
      getDocs(itemCollection).then((res) => {
        let products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setItems(products);
      });
    }
    // const producList = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(categoryName ? productosFiltrados : products);
    //   }, 2000);
    // });
    // // resolver promesa
    // producList
    //   .then((res) => {
    //     setItems(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // const itemCollection = collection(db, "products");
    // getDocs(itemCollection).then((res) => {
    //   let products = res.docs.map((products) => {
    //     return {
    //       ...products.data(),
    //       id: products.id,
    //     };
    //   });
    //   setItems(products);
    // });
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <ClipLoader
        color={"rgb(246, 224, 80)"}
        // loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
