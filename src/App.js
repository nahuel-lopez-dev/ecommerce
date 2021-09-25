// import => Me lo trae 
// NavBar => el nombre del componente
// from => de donde lo trae
// ruta => ruta es donde está el componente
import NavBar from "./components/NavBar/NavBar.js";
import CardWidget from "./components/CartWidget/CardWidget.js";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.js";

function App() {

  /** funciones, lógica, variables, etc **/
  const saludo = "Bienvenido a Ecommerce";

  return (
    <div>
      <NavBar/>
      <ItemListContainer content={saludo}/>
      <CardWidget text="Carrito"/>
    </div>
  );
}

export default App;
