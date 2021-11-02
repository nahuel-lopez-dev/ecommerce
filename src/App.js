// import => Me lo trae 
// Header => el nombre del componente, en UpperCamelCase
// from => de donde lo trae
// ruta => ruta es donde está el componente
import Header from "./components/Header/Header.js";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.js";
import { Footer } from "./components/Footer/Footer.js";
// import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.js";

function App() {

  /** funciones, lógica, variables, etc **/
  const greeting = "Bienvenid@ a Ecommerce";
  const slogan = "Donde nunca es tarde para comprar un chocolate";

  return (
      <div className="bg-light">
        <Header />
        <ItemListContainer titulo={greeting} subtitulo={slogan} />
        <Footer />
      </div>
  );
}

export default App;
