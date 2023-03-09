import "./App.css";
import Api1 from "./components/Api/Api1";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Nav from "./components/Nav/Nav";
// string con " " y numeros con {} en los props

function App() {
  return (
    <div className="App">
      <Nav />

      <ItemListContainer greeting="Hola Lucia, cómo estás??" />
      <Api1 />
    </div>
  );
}

export default App;
