import React, { Fragment, useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Typography from "@material-ui/core/Typography";
import Centering from "./centering";

const MapContainer = ({location}) => {
    // const [center, setCenter] = useState([53.301, 10.348]);
    const center = [location?.coords?.latitude, location?.coords?.longitude];
    // eslint-disable-next-line no-unused-vars
    const [zoom, setZoom] = useState(14);

    return (
        <Fragment>
            {location && (
                <Map center={center} zoom={zoom} style={{height: "30vmax"}} onViewportChanged={viewport => setZoom(viewport.zoom)}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={center}>
                        <Popup>Deine Position</Popup>
                    </Marker>
                </Map>
            )}
            {!location && (
                <div style={{width: "100%", height: "30vmax"}}>
                    <Centering>
                        <Typography variant="body2">GPS-Position ist unbekannt. Bitte erlaube den Standort für diese App</Typography>
                    </Centering>
                </div>
            )}
        </Fragment>
    );
};

export default MapContainer;