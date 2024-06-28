export function loadCategories() {
    return (dispatch) => {
        fetch("https://run.mocky.io/v3/dc25e1aa-3ae4-4c41-8626-b2529c231bcd").then(
            (res) => {
                return res.json();
            }
        ).then((res) => {
            console.log(res);
            dispatch({ type: "LOAD_CATEGORIES_DONE", payload: res });
        })
    }
}

function categoriesReducer(state = {
    categories: []
}, action) { 
    switch (action.type) {
        case "LOAD_CATEGORIES_DONE": {
            return {
                ...state,
                categories: action.payload
            }
        }
        default:
            return state;
    }
}

export default categoriesReducer;