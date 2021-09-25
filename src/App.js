// import => Me lo trae 
// NavBar => el nombre del componente
// from => de donde lo trae
// ruta => ruta es donde está el componente
import NavBar from "./components/NavBar/NavBar.js";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.js";

function App() {

  /** funciones, lógica, variables, etc **/
  const saludo = "Bienvenid@ a Ecommerce";

  return (
    <div>
      <NavBar/>
      <ItemListContainer content={saludo}/>
    </div>
  );
}

export default App;
