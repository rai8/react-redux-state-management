import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { buttonReducers } from './reducers/buttonReducer'
const initialState = {}

//list all reducers
const reducer = combineReducers({
  count: buttonReducers,
})

//setup development to the browser
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//create store
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store
