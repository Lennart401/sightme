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
const SET_OPTION = makeActionName(storeKey, "set-option");

const reducers = {
    [GENERATE_LINK]: (state) => produce(state, draft => {
        /** @type {Game} */
        const gameData = {
            name: state["name"],
            expiresAt: state["expiresAt"],
            lat: state["latitude"],
            lng: state["longitude"],
            assist: {
                tendency: state[options.TENDENCY],
                dyndist: state[options.DYNAMIC_DISTANCE],
                nodist: state[options.NO_DISTANCE]
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
    }),
    [SET_OPTION]: (state, {option, enable}) => produce(state, draft => {draft[option] = enable})
};

export const options = {
    TENDENCY: "assist-tendency",
    DYNAMIC_DISTANCE: "assist-dyndist",
    NO_DISTANCE: "assist-nodist"
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

export const setOption = (option, enable) =>
    store.dispatch({type: SET_OPTION, payload: {option, enable}});

// const initialState = {
//     latitude: 53.3037056,
//     longitude: 10.544742399999999,
//     expiresAt: '2020-07-04T22:53:20Z',
//     name: 'Lennart',
//     link: 'http://localhost:3000/sightme/join/eyJuYW1lIjoiTGVubmFydCIsImV4cGlyZXNBdCI6IjIwMjAtMDctMDRUMjI6NTM6MjBaIiwibGF0Ijo1My4zMDM3MDU2LCJsbmciOjEwLjU0NDc0MjM5OTk5OTk5OX0'
// };

const initialState = {
    // latitude: 53.3037056,
    // longitude: 10.544742399999999,
    // expiresAt: '2020-07-04T22:53:20Z',
    // name: 'Lennart',
    // link: 'http://localhost:3000/sightme/join/eyJuYW1lIjoiTGVubmFydCIsImV4cGlyZXNBdCI6IjIwMjAtMDctMDRUMjI6NTM6MjBaIiwibGF0Ijo1My4zMDM3MDU2LCJsbmciOjEwLjU0NDc0MjM5OTk5OTk5OX0',
    [options.TENDENCY]: true,
    [options.DYNAMIC_DISTANCE]: false,
    [options.NO_DISTANCE]: false
};

store.injectReducer(storeKey, (state = initialState, {type, payload}) =>
    reducers[type] ? reducers[type](state, payload) : state
);

// -- hooks
export const useLink = () => {
    return useLocalState()["link"];
};

export const useOption = (option) => {
    return useLocalState()[option];
};

export const useCurrentData = () => {
    return useLocalState();
};

const useLocalState = () => {
    const [state, setState] = useState(getState(storeKey));
    useLayoutEffect(() => subscribe(storeKey, setState), [setState]);
    return state;
};