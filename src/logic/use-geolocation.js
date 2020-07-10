import { useEffect, useState } from "react";

const useGeolocation = () => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        let id = undefined;
        if (navigator.geolocation) {
            id = navigator.geolocation.watchPosition(position => {
                setLocation(position);
            }, () => {}, {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
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