import { getState, makeActionName, subscribe } from "./store-util";
import produce from "immer";
import { store } from "./store";
import { useLayoutEffect, useState } from "react";
import { Base64 } from "js-base64";

const storeKey = "hosting";

// DEFINITIONS
const GENERATE_LINK = makeActionName(storeKey, "generate-link");
const SET_USERNAME = makeActionName(storeKey, "set-username");
const SET_EXPIRES_AT = makeActionName(storeKey, "set-create-date");
const SET_LAT_LNG = makeActionName(storeKey, "set-lat-lng");

const reducers = {
    [GENERATE_LINK]: (state) => produce(state, draft => {
        /** @type {Game} */
        const gameData = {
            name: state["name"],
            expiresAt: state["expiresAt"],
            lat: state["latitude"],
            lng: state["longitude"],
            assist: {
                tendency: true // TODO add "enable" option for this
            }
        };

        const parameter = Base64.encodeURI(JSON.stringify(gameData));
        draft["link"] = window.origin + "/sightme/join/" + parameter;
    }),

    [SET_USERNAME]: (state, username) => produce(state, draft => {draft["name"] = username}),
    [SET_EXPIRES_AT]: (state, createDate) => produce(state, draft => {draft["expiresAt"] = createDate}),
    [SET_LAT_LNG]: (state, {lat, lng}) => produce(state, draft => {
        draft["latitude"] = lat;
        draft["longitude"] = lng;
    })
};

// EXPORTS -- setters
export const generateLink = () =>
    store.dispatch({type: GENERATE_LINK, payload: {}});

export const setUsername = (username) =>
    store.dispatch({type: SET_USERNAME, payload: username});

export const setExpiresAt = (createDate) =>
    store.dispatch({type: SET_EXPIRES_AT, payload: createDate});

export const setLatLng = (lat, lng) =>
    store.dispatch({type: SET_LAT_LNG, payload: {lat, lng}});

// const initialState = {
//     latitude: 53.3037056,
//     longitude: 10.544742399999999,
//     expiresAt: '2020-07-04T22:53:20Z',
//     name: 'Lennart',
//     link: 'http://localhost:3000/sightme/join/eyJuYW1lIjoiTGVubmFydCIsImV4cGlyZXNBdCI6IjIwMjAtMDctMDRUMjI6NTM6MjBaIiwibGF0Ijo1My4zMDM3MDU2LCJsbmciOjEwLjU0NDc0MjM5OTk5OTk5OX0'
// };

store.injectReducer(storeKey, (state = {}, {type, payload}) =>
    reducers[type] ? reducers[type](state, payload) : state
);

// -- hooks
export const useLink = () => {
    const [state, setState] = useState(getState(storeKey));
    useLayoutEffect(() => subscribe(storeKey, setState), [setState]);
    return state["link"];
};