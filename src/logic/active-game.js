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
 * @property {number} initialDistance - if assist.dyndist is set, the initial distance to the target
 * @property {GameAssistance} assist - Assistance flags (e.g. tendency)
 */

/**
 * @typedef {Object} GameAssistance
 * @property {boolean} tendency - show tendency to participants
 * @property {boolean} dyndist - use dynamic distance (e.g. calculate blinking factor on the fly) instead of fixed distance
 */

const storeKey = "active-game";

// DEFINITIONS
const SET_ACTIVE_GAME = makeActionName(storeKey, "set-active-game");
const LEAVE_ACTIVE_GAME = makeActionName(storeKey, "leave-active-game");

const SET_INITIAL_DISTANCE = makeActionName(storeKey, "set-initial-distance");

const reducers = {
    [SET_ACTIVE_GAME]: (state, game) => produce(state, draft => {
        return game;
    }),
    [LEAVE_ACTIVE_GAME]: (state) => produce(state, draft => {
        delete draft["name"];
        delete draft["expiresAt"];
        delete draft["lat"];
        delete draft["lng"];

        delete draft["initialDistance"];
        delete draft["assist"];
    }),

    [SET_INITIAL_DISTANCE]: (state, initialDistance) => produce(state, draft => {
        draft["initialDistance"] = initialDistance;
    })
};

// EXPORTS -- setters
export const setActiveGame = (game) => {
    store.dispatch({type: SET_ACTIVE_GAME, payload: game});
};

export const leaveActiveGame = () => {
    store.dispatch({type: LEAVE_ACTIVE_GAME, payload: {}});
};

export const setInitialDistance = (initialDistance) => {
    store.dispatch({type: SET_INITIAL_DISTANCE, payload: initialDistance});
}

store.injectReducer(storeKey, (state = {}, {type, payload}) =>
    reducers[type] ? reducers[type](state, payload) : state
);

// -- hooks
/**
 *
 * @returns {Game|undefined}
 */
export const useActiveGame = () => {
    const [state, setState] = useState(getState(storeKey));
    useLayoutEffect(() => subscribe(storeKey, setState), [setState]);

    // Leave active game if currentTime > expiredAt
    if (state) {
        if (moment().isAfter(state["expiresAt"])) {
            leaveActiveGame();
            return undefined;
        }
    }

    if (state?.name) {
        return state;
    }

    return undefined;
};