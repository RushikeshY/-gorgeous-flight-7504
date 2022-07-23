
import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux'
import  { AuthReducer } from './reducer'


const rootReducer = combineReducers({isAuth : AuthReducer})

const Thunk = (store)=> (next)=> (action)=> {
    console.log("type of action")

    if(typeof action ==="function"){
        return action(store.dispatch)
    }
    next(action)
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(Thunk),
        // other store enhancers if any
      );

const store = legacy_createStore(rootReducer,enhancer)

export default store