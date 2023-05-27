/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";
import axios from "axios"


const CategoriesContex = createContext();

const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState([])


    const getCategories = async () => {
        try {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"

            const { data } = await axios(url)

            setCategories(data.drinks)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategories()
    }, [])



    return (
        <CategoriesContex.Provider value={{
            categories
        }}>
            {children}
        </CategoriesContex.Provider>
    );
};

export { CategoriesProvider };

export default CategoriesContex;
