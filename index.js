const  {createStore, combineReducers, applyMiddleware} = require('redux');
const { default: logger } = require('redux-logger');

const ADD_PRODUCT = 'ADD_PRODUCT'
const GET_PRODUCT = 'GET_PRODUCT'

const ProductInitialState = {
    products: ['suger','salt'],
    count : 2
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


const store = createStore(productReducer,applyMiddleware(logger));

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(getProduct());
store.dispatch(addProduct('irfa '));
store.dispatch(getProduct());
