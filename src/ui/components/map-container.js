import React, { Fragment, useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Typography from "@material-ui/core/Typography";
import Centering from "./centering";

const MapContainer = ({location}) => {
    const position = [location?.coords?.latitude, location?.coords?.longitude];
    const [zoom, setZoom] = useState(14);

    return (
        <Fragment>
            {location && (
                <Map center={position} zoom={zoom} style={{height: "30vmax"}} onViewportChanged={viewport => {
                    setZoom(viewport.zoom);
                }}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
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