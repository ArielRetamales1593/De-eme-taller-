import { createContext, useState } from "react";

// se importa createcontext y se crea una const context
export const CartContext = createContext();

// secambia al nombre a provider
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //   esta funcion recibe un producto
  // tratar de entender esta parte
  //   se hace para que el producto no se sobreescriba al agregarlo al carrito
  // ejem ...cart Spread

  // funcion para agregar al carrito
  const agregarAlcarrito = (producto) => {
    let existe = IsIncart(producto.id);

    if (existe) {
      let newCart = cart.map((elemento) => {
        if (elemento.id === producto.id) {
          return {
            ...elemento,
            quantity: elemento.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, producto]);
    }
  };

  const IsIncart = (id) => {
    const existe = cart.some((element) => element.id === id);

    return existe;
  };

  // limpiar carrito
  const clearCart = () => {
    setCart([]);
  };

  const totalElementos = () => {
    const total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);

    return total;
  };

  const getTotalPrice = () => {
    let precioTotal = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price;
    }, 0);
    return precioTotal;
  };

  const deleteProductById = (id) => {
    const newCart = cart.filter((element) => element.id !== id);
    setCart(newCart);
  };

  const getQuantityById = (id) => {
    const productSelected = cart.find((element) => element.id === id);
    return productSelected?.quantity;
  };

  let data = {
    cart: cart,
    setCart: setCart,
    agregarAlcarrito: agregarAlcarrito,
    clearCart: clearCart,
    totalElementos: totalElementos,
    getTotalPrice: getTotalPrice,
    deleteProductById: deleteProductById,
    getQuantityById: getQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
