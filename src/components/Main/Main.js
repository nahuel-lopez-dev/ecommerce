import Header from "../Header/Header"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import Cart from "../Cart/Cart"
import Footer from "../Footer/Footer"
import { Switch, Route } from "react-router"

const Main = () => {

    /** funciones, lógica, variables, etc **/
    const greeting = "Bienvenid@ a Ecommerce";
    const slogan = "Donde nunca es tarde para comprar un chocolate";

    return (
        <main className="bg-light">
            <Header />

            <Switch>
                <Route path="/" exact>
                    <ItemListContainer titulo={greeting} subtitulo={slogan} />
                </Route>

                <Route path="/cart" exact>
                    <Cart />
                </Route>

                <Route path="/:categoria/" exact>
                    <ItemListContainer titulo={greeting} subtitulo={slogan} />
                </Route>

                <Route path="/:categoria/:id" exact>
                    <ItemDetailContainer />
                </Route>
            </Switch>

            <Footer />
        </main>
    )
}

export default Main
