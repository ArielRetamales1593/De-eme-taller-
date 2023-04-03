import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import FormCheckout from "../../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";
import Empty from "../../Empty/Empty";
import "./Cart.css";
import Ok from "../../Ok/Ok";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null);

  function clear() {
    Swal.fire({
      title: "Seguro que quiere borrar el carrito?",
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: "si",
      denyButtonText: `no`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("carrito borrado exitosamente!", "", "success");
        clearCart();
      } else if (result.isDenied) {
      }
    });
  }

  const precioTotal = getTotalPrice();

  if (orderId) {
    return (
      <div className="mensajeFinal">
        <h2> Gracias por su compra</h2>
        <h4>El comprobante es : {orderId}</h4>
        <Link to="/"> Seguir Comprando</Link>

        <Ok />
      </div>
    );
  }

  return (
    <div>
      {!showForm ? (
        <div>
          {cart.map((element) => {
            return (
              <div className="cont1" key={element.id}>
                <h1 className="titulo">{element.title}</h1>
                <img className="img1" src={element.img} alt="" />
                <h2> $ {element.price}</h2>
                <p> Cantidad: {element.quantity}</p>
                <button onClick={() => deleteProductById(element.id)}>
                  Eliminar
                </button>
              </div>
            );
          })}

          {cart.length === 0 && (
            <div>
              <Empty />
            </div>
          )}

          {cart.length > 0 && (
            <div className="cont2">
              <h4 className="precio">
                {" "}
                El precio total de tu compra es ${precioTotal}
              </h4>
              <button onClick={clear}>Limpiar Carrito</button>
              <button onClick={() => setShowForm(true)}>Finalizar</button>
            </div>
          )}
        </div>
      ) : (
        <FormCheckout
          cart={cart}
          getTotalPrice={getTotalPrice}
          setOrderId={setOrderId}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default Cart;
