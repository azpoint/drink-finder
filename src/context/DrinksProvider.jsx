/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";
import axios from "axios"

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
    const [drinks, setDrinks] = useState([])
    const [modal, setModal] = useState(false)
    const [drinkId, setDrinkId] = useState(null)
    const [recipe, setRecipe] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const getRecipe = async () => {
            if(!drinkId) return

            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}
                `
                const recipe = await axios(url)

                setRecipe(recipe.data.drinks[0])

            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        getRecipe()
    },[drinkId])


    const handleModalClick = () => {
        setModal(!modal)
    }
    
    const getDrinks = async datat => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datat.drink}&c=${datat.category}`

            const {data} =await axios(url)

            setDrinks(data.drinks)

        } catch (error) {
            console.log(error)
        }
    }

    const handleDrinkIdClick = id => {
        setDrinkId(id)
    }


    return (
        <DrinksContext.Provider value={{
            getDrinks,
            drinks,
            handleModalClick,
            modal,
            handleDrinkIdClick,
            recipe,
            loading
        }}>
            {children}
        </DrinksContext.Provider>
    );
};

export { DrinksProvider };

export default DrinksContext;
