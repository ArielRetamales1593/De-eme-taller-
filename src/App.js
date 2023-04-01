import "./App.css";
// import Api1 from "./components/Api/Api1";
// import Api2 from "./components/Api/Api2";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./components/CartWidget/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import Form from "./components/Form/Form";
import CartContextProvider from "./context/CartContext";

// string con " " y numeros con {} en los props
// contador........
function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Nav />
        {/* <Form /> */}

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />

          <Route path="*" element={<h1>Error 404 : Not found</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
