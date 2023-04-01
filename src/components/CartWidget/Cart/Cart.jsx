import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const clear = () => {
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
  };

  const precioTotal = getTotalPrice();

  return (
    <div>
      {cart.map((element) => {
        return (
          <div key={element.id}>
            <h1>{element.title}</h1>
            <img src={element.img} alt="" width={"500px"} />
            <h2>{element.price}</h2>
            <p>{element.quantity}</p>
            <button onClick={() => deleteProductById(element.id)}>
              Eliminar
            </button>
          </div>
        );
      })}
      <h4> El precio total de tu compra es ${precioTotal}</h4>

      {cart.length > 0 && (
        <div>
          <button onClick={clear}>Limpiar Carrito</button>
          <button>Comprar</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
