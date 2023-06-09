import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { makeServer } from "./server";
import { ProductContext, ProductContextProvider } from "./contexts/DataContext";
import { FilterContext, FilterContextProvider } from "./contexts/FilterContext";

export { ProductContext, FilterContext };

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <ProductContextProvider>
                <FilterContextProvider>
                    <App />
                </FilterContextProvider>
            </ProductContextProvider>
        </Router>
    </React.StrictMode>
);
