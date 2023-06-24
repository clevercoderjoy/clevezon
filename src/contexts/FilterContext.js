import { ProductContext } from "./DataContext";
import { filterReducer } from "../reducers/FilterReducer";
import { createContext } from "react";
import { useContext, useReducer } from "react";

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
    const {
        state: { allProducts },
        productDispatch,
    } = useContext(ProductContext);
    const initialFilters = {
        filteredProducts: [],
        filtersApplied: false,
    };
    const [filterState, filterDispatch] = useReducer(
        filterReducer,
        initialFilters
    );
    const handleFilters = (e) => {
        const currPrice = e.target.value;
        const filteredItems = allProducts.filter(
            (item) => item.price <= currPrice
        );
        filterDispatch({ type: "filteredProducts", payload: filteredItems });
    };
    return (
        <FilterContext.Provider
            value={{ filterState, filterDispatch, handleFilters }}
        >
            {children}
        </FilterContext.Provider>
    );
};
