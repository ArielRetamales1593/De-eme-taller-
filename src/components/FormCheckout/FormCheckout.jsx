import React, { useState } from "react";

import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseconfig";
import "./FormCheckout.css";
import Pay from "../Pay/Pay";

const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserdata] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let total = getTotalPrice();

    let order = {
      buyer: userData,
      items: cart,
      total: total,
    };

    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => console.log(err));

    cart.map((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });

      updateDoc();
    });
  };

  return (
    <div className="formCompra">
      <form className="form1" onSubmit={handleSubmit} action="">
        <h3>Ingrese sus datos para finalizar con la compra</h3>
        <input
          type="text"
          placeholder="Nombre"
          value={userData.name}
          onChange={(e) => setUserdata({ ...userData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => setUserdata({ ...userData, email: e.target.value })}
        />
        <input
          type="number"
          placeholder="Phone"
          value={userData.phone}
          onChange={(e) => setUserdata({ ...userData, phone: e.target.value })}
        />
        <button type="submit">Comprar</button>
      </form>

      <Pay />
    </div>
  );
};

export default FormCheckout;
