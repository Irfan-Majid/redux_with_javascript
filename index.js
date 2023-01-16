const { default: axios } = require('axios');
const  {createStore, combineReducers, applyMiddleware} = require('redux');
const { default: thunk } = require('redux-thunk');

const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const GET_TODOS_FAILED = 'GET_TODOS_FAILED';
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const initialTodoState = {
    todos: [],
    isLoading : false,
    error: null
}


const getTodosRequest = (product) => {
    return {
        type : GET_TODOS_REQUEST,
    };
}

const getTodosFailed = (error) => {
    return {
        type : GET_TODOS_FAILED,
        payload : error
    };
}

const getTodosSuccess = (todos) => {
    return {
        type : GET_TODOS_SUCCESS,
        payload : todos
    };
}





const productReducer = (state=initialTodoState,action) => {
    switch (action.type){
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading : true,
            }
        case GET_TODOS_FAILED:
            return {
                ...state,
                isLoading : false,
                error: action.payload
            }
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading : false,
                todos: action.payload,
                error: null
            }
        default:
            return state;
    }
}

const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest())
        axios.get(API_URL)
        .then(response => {
            const todos = response.data.map(todo => todo.title);
            dispatch(getTodosSuccess(todos));
        })
        .catch(error => {
            dispatch(getTodosFailed(error.message));
        })
    }
}
const store = createStore(productReducer,applyMiddleware(thunk));

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(fetchData());