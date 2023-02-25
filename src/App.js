import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Nav from "./components/Nav/Nav";
// string con " " y numeros con {} en los props

function App() {
  return (
    <div className="App">
      <Nav />

      <ItemListContainer greeting="Hola Lucia, cómo estás??" />
    </div>
  );
}

export default App;
