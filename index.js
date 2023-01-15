const  {createStore, combineReducers} = require('redux');

const ADD_PRODUCT = 'ADD_PRODUCT'
const GET_PRODUCT = 'GET_PRODUCT'
const ADD_CART = 'ADD_CART'
const GET_CART = 'GET_CART'

const ProductInitialState = {
    products: ['suger','salt'],
    count : 2
}

const cartInitialState = {
    products: ['suger'],
    count : 1
}

const addProduct = (product) => {
    return {
        type : ADD_PRODUCT,
        payload : product,
    };
}

const getProduct = () => {
    return {
        type : GET_PRODUCT
    };
}

const addCart = (product) => {
    return {
        type : ADD_CART,
        payload : product,
    };
}

const getCart = () => {
    return {
        type : GET_CART
    };
}



const productReducer = (state=ProductInitialState,action) => {
    switch (action.type){
        case ADD_PRODUCT:
            return {
                products:[...state.products,action.payload],
                count:state.count + 1,
            }
        case GET_PRODUCT:
            return {
                ...state
            }
        default:
            return state;
    }
}


const cartReducer = (state=cartInitialState,action) => {
    switch (action.type){
        case ADD_CART:
            return {
                products:[...state.products,action.payload],
                count:state.count + 1,
            }
        case GET_CART:
            return {
                ...state
            }
        default:
            return state;
    }
}



const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
});

const store = createStore(rootReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(getCart());
store.dispatch(addCart('irf'));
store.dispatch(getCart());

store.dispatch(getProduct());
store.dispatch(addProduct('irfa '));
store.dispatch(getProduct());
// store.dispatch(incrementAction());
// store.dispatch(decrementAction());
// store.dispatch(resetAction());
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(incrementByValue(5));