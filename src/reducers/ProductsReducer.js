export const productReducer = (state, action) => {
    switch (action.type) {
        case "products": {
            return {
                ...state,
                allProducts: action.payload,
            };
        }
        case "setIterable": {
            return {
                ...state,
                currIterable: action.payload,
            };
        }
        case "loading": {
            return {
                ...state,
                loading: action.payload,
            };
        }
        case "category": {
            return {
                ...state,
                allCategories: action.payload,
            };
        }
    }
};
