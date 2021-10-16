// import => Me lo trae 
// NavBar => el nombre del componente
// from => de donde lo trae
// ruta => ruta es donde está el componente
import NavBar from "./components/NavBar/NavBar.js";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.js";
import { Footer } from "./components/Footer/Footer.js";

function App() {

  /** funciones, lógica, variables, etc **/
  const greeting = "Bienvenid@ a Ecommerce";

  return (
    <div className="bg-light">
      <NavBar/>
      <ItemListContainer content={greeting}/>
      <Footer />
    </div>
  );
}

export default App;
