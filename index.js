const  {createStore} = require('redux');

const ADD_USER = 'ADD_USER'
// const DECREMENT = 'DECREMENT'
// const RESET = 'RESET'
// const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'

const initialState = {
    users: ['anis'],
    count : 1
}

const addUser = (user) => {
    return {
        type : ADD_USER,
        payload : user,
    };
}

// const decrementAction = () => {
//     return {
//         type : DECREMENT,
//     };
// }

// const resetAction = () => {
//     return {
//         type : RESET,
//     };
// }

// const incrementByValue = (value) => {
//     return {
//         type : INCREMENT_BY_VALUE,
//         payload : value
//     };
// }

const userReducer = (state=initialState,action) => {
    switch (action.type){
        case ADD_USER:
            return {
                user:[...state.users,action.payload],
                count:state.count + 1,
            }
        // case DECREMENT:
        //     return {
        //         ...state,
        //         count:state.count - 1,
        //     }
        // case RESET:
        //     return {
        //         ...state,
        //         count:0,
        //     }
        // case INCREMENT_BY_VALUE:
        //     return {
        //         ...state,
        //         count:state.count + action.payload,
        //     }
        default:
            return state;
    }
}

const store = createStore(userReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(addUser('irf'));
// store.dispatch(incrementAction());
// store.dispatch(decrementAction());
// store.dispatch(resetAction());
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(incrementByValue(5));