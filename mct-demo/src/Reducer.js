let initial = {
    wishList: [],
    addToCart: {},
    pizzas: ''
}


const myReducer = (store = initial, action) => {
    if (action.type === 'allPizza') {
        return {
            ...store,
            pizzas: action.pizzas
        }
    }
    else if (action.type === "WISHLIST") {
        let isPresent = store.wishList.findIndex(e => e.id === action.payload.id);
        if(isPresent!==-1){
            return store
        }
        return {
            ...store,
            wishList: [...store.wishList, action.payload]
        }
    } else if (action.type === "ADD_TO_CART") {
        return {
            ...store, addToCart: { ...action.payload }
        }
    }
    return store;
}

export default myReducer;