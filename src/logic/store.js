import { combineReducers, compose, createStore } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

let reducers = {};

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const allStoreEnhancers = composeEnhancers(
    //applyMiddleware(thunkMiddleware),
    // (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

const persistConfig = {
    key: "active-game",
    storage: storage,
    whitelist: ["active-game"]
}

export const store = createStore(persistReducer(persistConfig, s => s), allStoreEnhancers); // allStoreEnhancers
export const persistor = persistStore(store);

store.injectReducer = (key, reducer) => {
    reducers[key] = reducer;
    store.replaceReducer(persistReducer(persistConfig, combineReducers(reducers)));
};