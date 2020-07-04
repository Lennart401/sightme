import { getState, makeActionName, subscribe } from "./store-util";
import produce from "immer";
import { store } from "./store";
import { useLayoutEffect, useState } from "react";
import moment from "moment";

/**
 * @typedef {Object} Game
 * @property {string} name - The host's name
 * @property {string} expiresAt - When the game expires, ISO 8601 date string
 * @property {number} lat - The host's latitude
 * @property {number} lng - The host's longitude
 */

const storeKey = "active-game";

// DEFINITIONS
const SET_ACTIVE_GAME = makeActionName(storeKey, "set-active-game");
const LEAVE_ACTIVE_GAME = makeActionName(storeKey, "leave-active-game");

const reducers = {
    [SET_ACTIVE_GAME]: (state, game) => produce(state, draft => {
        console.log("set-active-game " + game);
        return game;
    }),
    [LEAVE_ACTIVE_GAME]: (state) => produce(state, draft => {
        delete draft["name"];
        delete draft["expiresAt"];
        delete draft["lat"];
        delete draft["lng"];
    })
};

// EXPORTS -- setters
export const setActiveGame = (game) => {
    store.dispatch({type: SET_ACTIVE_GAME, payload: game});
};

export const leaveActiveGame = () => {
    store.dispatch({type: LEAVE_ACTIVE_GAME, payload: {}});
};

store.injectReducer(storeKey, (state = {}, {type, payload}) =>
    reducers[type] ? reducers[type](state, payload) : state
);

// -- hooks

export const useActiveGame = () => {
    const [state, setState] = useState(getState(storeKey));
    useLayoutEffect(() => subscribe(storeKey, setState), [setState]);

    // Leave active game if currentTime > expiredAt
    if (state) {
        if (moment().isAfter(state["expiresAt"])) {
            leaveActiveGame();
        }
    }

    return state;
};