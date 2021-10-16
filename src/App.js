// import => Me lo trae 
// Header => el nombre del componente, en UpperCamelCase
// from => de donde lo trae
// ruta => ruta es donde está el componente
import Header from "./components/Header/Header.js";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.js";
import { Footer } from "./components/Footer/Footer.js";

function App() {

  /** funciones, lógica, variables, etc **/
  const greeting = "Bienvenid@ a Ecommerce";

  return (
    <div className="bg-light">
      <Header/>
      <ItemListContainer content={greeting}/>
      <Footer />
    </div>
  );
}

export default App;
