import { useContext } from "react"
import CategoriesContex from "../context/CategoryProvider"

const useCategories = () => {
    return useContext(CategoriesContex)
}

export default useCategories