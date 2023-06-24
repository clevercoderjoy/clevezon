export const filterReducer = (state, action) => {
    switch (action.type) {
        case "filteredProducts": {
            return {
                ...state,
                filteredProducts: action.payload,
            };
        }
        case "filtersApplied": {
            return {
                ...state,
                filtersApplied: action.payload,
            };
        }
    }
};
