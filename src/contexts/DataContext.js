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
            console.log(e);
        } finally {
            productsDispatch({
                type: "loading",
                payload: false,
            });
        }
    };
    const getCategory = async () => {
        try {
            const { status, data } = await axios({
                method: "get",
                url: "/api/categories",
            });
            if (status === 200) {
                productsDispatch({
                    type: "category",
                    payload: data?.categories,
                });
            }
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getData();
        getCategory();
    }, []);
    return (
        <ProductContext.Provider
            value={{ allProducts: state.allProducts, loading: state.loading }}
        >
            {children}
        </ProductContext.Provider>
    );
};
