import { getState, makeActionName, subscribe } from "./store-util";
import { store } from "./store";
import produce from "immer";
import { useLayoutEffect, useState } from "react";

const storeKey = "message";
const DEFAULT_SCOPE = "global";

// DEFINITIONS
const SET = makeActionName(storeKey, "set");
const CLEAR = makeActionName(storeKey, "clear");

const reducers = {
    [SET]: (state, {message, scope}) => produce(state, draft => {draft[scope] = message;}),
    [CLEAR]: (state, scope) => produce(state, draft => {draft[scope] = null;})
}

const initialState = {
    global: null
};

// EXPORTS -- setters
export const setMessage = (message, scope = DEFAULT_SCOPE) =>
    store.dispatch({type: SET, payload: {message, scope}});

export const clearMessage = (scope = DEFAULT_SCOPE) =>
    store.dispatch({type: CLEAR, payload: scope});

store.injectReducer(storeKey, (state = initialState, {type, payload}) =>
    reducers[type] ? reducers[type](state, payload) : state
);

// -- hooks
export const useMessage = (scope = DEFAULT_SCOPE) => {
    const [state, setState] = useState(getState(storeKey));
    useLayoutEffect(() => subscribe(storeKey, setState), [setState]);
    return state[scope];
};