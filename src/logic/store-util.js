import { store } from "./store";

export const getState = (storeKey) => store.getState()[storeKey];

export const subscribe = (storeKey, func) => {
    let lastState = getState(storeKey);
    return store.subscribe(() => {
        if (lastState !== getState(storeKey)) {
            lastState = getState(storeKey);
            func(lastState);
        }
    });
};

export const makeActionName = (storeKey, name) => `${storeKey}/${name}`;

export const setImmediateInterval = (func, interval) => {
    func();
    return setInterval(func, interval);
};