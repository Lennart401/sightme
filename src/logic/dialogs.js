import { getState, makeActionName, subscribe } from "./store-util";
import produce from "immer";
import { store } from "./store";
import { useLayoutEffect, useState } from "react";

const storeKey = "dialogs";

// DEFINITIONS
const SHOW_DIALOG = makeActionName(storeKey, "show");
const HIDE_DIALOG = makeActionName(storeKey, "hide");
const SET_INFO = makeActionName(storeKey, "setInfo");

const reducers = {
    [SHOW_DIALOG]: (state, dialogName) => produce(state, draft => {
        draft[dialogName] = {...state[dialogName], show: true}
    }),
    [HIDE_DIALOG]: (state, dialogName) => produce(state, draft => {
        draft[dialogName] = {...state[dialogName], show: false}
    }),

    [SET_INFO]: (state, {dialogName, info}) => produce(state, draft => {
        draft[dialogName] = {...info, show: state[dialogName]?.show}
    })
};

// EXPORTS -- setters
export const showDialog = (dialogName) =>
    store.dispatch({type: SHOW_DIALOG, payload: dialogName});
// hideDialog will only be dispatched if the dialog is actually open (in order not to bloat redux timeline)
export const hideDialog = (dialogName) => {
    if (getState(storeKey)[dialogName]?.show)
        store.dispatch({type: HIDE_DIALOG, payload: dialogName});
};
export const setDialogInfo = (dialogName, info) =>
    store.dispatch({type: SET_INFO, payload: {dialogName, info}});

store.injectReducer(storeKey, (state = {}, {type, payload}) =>
    reducers[type] ? reducers[type](state, payload) : state
);

// -- hooks
/**
 * @param {string} dialogName
 * @returns {{show: {boolean}}}
 */
export const useDialogState = (dialogName) => {
    const [state, setState] = useState(getState(storeKey));
    useLayoutEffect(() => subscribe(storeKey, setState), [setState]);
    return state[dialogName];
};