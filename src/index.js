import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { makeServer } from "./server";
import { ProductContext, ProductContextProvider } from "./contexts/DataContext";

export {ProductContext};

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <ProductContextProvider>
                <App />
            </ProductContextProvider>
        </Router>
    </React.StrictMode>
);
