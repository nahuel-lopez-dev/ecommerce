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
  const slogan= "Donde nunca es tarde para encontrar lo que buscás";

  return (
    <div className="bg-light">
      <Header/>
      <ItemListContainer titulo={greeting} subtitulo={slogan}/>
      <Footer />
    </div>
  );
}

export default App;
