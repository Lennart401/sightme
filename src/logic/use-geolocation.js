import { useEffect, useState } from "react";

const useGeolocation = () => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        let id = undefined;
        if (navigator.geolocation) {
            id = navigator.geolocation.watchPosition(position => {
                setLocation(position);
            });
        }

        return () => {
            if (id) {
                navigator.geolocation.clearWatch(id);
            }
        };
    }, []);

    return location;
};

export default useGeolocation;