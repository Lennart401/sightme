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

    if (location && game) {
        const distance = getDistance(
            {latitude: location.coords.latitude, longitude: location.coords.longitude},
            {latitude: game.lat, longitude: game.lng},
            1
        );

        const frequency = exp.fmax * Math.pow(Math.E, b * distance);

        return {distance, frequency};
    } else {
        return {distance: -1, frequency: -1};
    }
};

export default useDistance;