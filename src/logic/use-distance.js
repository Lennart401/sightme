import useGeolocation from "./use-geolocation";
import getDistance from "geolib/es/getDistance";
import { useActiveGame } from "./active-game";

const exp = {
    fmin: 0.15,
    fmax: 5,
    d: 4000
};

const b = (Math.log(exp.fmin / exp.fmax)) / exp.d;

const useDistance = () => {
    const location = useGeolocation();
    const game = useActiveGame();

    const getDynamicMultiplier = () => (Math.log(exp.fmin / exp.fmax)) / (game.initialDistance * 1.3);

    if (location && game) {
        const distance = getDistance(
            {latitude: location.coords.latitude, longitude: location.coords.longitude},
            {latitude: game.lat, longitude: game.lng},
            1
        );

        const multiplier = (game.assist?.dyndist && game.initialDistance)
            ? getDynamicMultiplier()
            : b;
        const frequency = exp.fmax * Math.pow(Math.E, multiplier * distance);

        return {distance, frequency: frequency > 0.05 ? frequency : 0.05};
    }

    return {distance: -1, frequency: -1};
};

export default useDistance;