import axios from "axios";
import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { productReducer } from "../reducers/ProductsReducer";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
    const initialState = {
        loading: "true",
        error: "error",
        allProducts: [],
        allCategories: [],
        filteredProducts: [],
    };
    const [state, productsDispatch] = useReducer(productReducer, initialState);

    const getData = async () => {
        try {
            const { status, data } = await axios({
                method: "get",
                url: "/api/products",
            });
            if (status === 200) {
                productsDispatch({
                    type: "products",
                    payload: data?.products,
                });
            }
        } catch (e) {
            console.error(e);
        } finally {
            productsDispatch({
                type: "loading",
                payload: false,
            });
        }
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <ProductContext.Provider
            value={{
                state,
                productsDispatch,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
