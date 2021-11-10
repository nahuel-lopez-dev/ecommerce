// import => Me lo trae 
// Header => el nombre del componente, en UpperCamelCase
// from => de donde lo trae
// ruta => ruta es donde está el componente
import { BrowserRouter } from "react-router-dom"
import Main from "./components/Main/Main";
import { CartFunction } from "./components/Context/CartContext"

function App() {

  return (
    <BrowserRouter>
      <CartFunction>
        <Main />
      </CartFunction>
    </BrowserRouter>
  );
}

export default App;
