import { Row } from "react-bootstrap";

import useDrinks from "../hooks/useDrinks";

import Drink from "./Drink";

function DrinksList() {
    const { drinks } = useDrinks();    

    return (
        <Row className="mt-5">
            {drinks.map((drink) => (
                <Drink drink={drink} key={drink.idDrink}/>
            ))}
        </Row>
    );
}
export default DrinksList;
