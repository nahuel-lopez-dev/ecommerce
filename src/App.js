// import => Me lo trae 
// Header => el nombre del componente, en UpperCamelCase
// from => de donde lo trae
// ruta => ruta es donde está el componente
import Header from "./components/Header/Header.js"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.js"
import { Footer } from "./components/Footer/Footer.js"
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.js"

function App() {

  /** funciones, lógica, variables, etc **/
  const greeting = "Bienvenid@ a Ecommerce";
  const slogan = "Donde nunca es tarde para comprar un chocolate";

  return (
    <BrowserRouter>
      <div className="bg-light">
        <Header />
        <Switch>
          <Route path="/" exact>
            <ItemListContainer titulo={greeting} subtitulo={slogan} />
          </Route>
          <Route path="/:categoria/:id" exact>
            <ItemListContainer titulo={greeting} subtitulo={slogan} />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>  
  );
}

export default App;
