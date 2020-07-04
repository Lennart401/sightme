import useGeolocation from "./use-geolocation";
import getDistance from "geolib/es/getDistance";
import { useActiveGame } from "./active-game";

const useDistance = () => {
    const location = useGeolocation();
    const game = useActiveGame();

    if (location && game) {
        const distance = getDistance(
            {latitude: location.coords.latitude, longitude: location.coords.longitude},
            {latitude: game.lat, longitude: game.lng},
            1
        );

        const frequency = 5 * Math.pow(Math.E, -0.001168 * distance);

        return {distance, frequency};
    } else {
        return {distance: -1, frequency: -1};
    }
};

export default useDistance;