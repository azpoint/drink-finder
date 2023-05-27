import { Container } from "react-bootstrap";

//Context
import { CategoriesProvider } from "./context/CategoryProvider";
import { DrinksProvider } from "./context/DrinksProvider";

//Components
import FormDrink from "./components/FormDrink";
import DrinksList from "./components/DrinksList";
import ModalDrink from "./components/ModalDrink";

function App() {
    return (
        <CategoriesProvider>
            <DrinksProvider>
                <header className="py-5">
                    <h1>Drinks Finder</h1>
                </header>
                <Container className="mt-5">
                    <FormDrink />
                    <DrinksList />

                    <ModalDrink />
                </Container>
            </DrinksProvider>
        </CategoriesProvider>
    );
}

export default App;
