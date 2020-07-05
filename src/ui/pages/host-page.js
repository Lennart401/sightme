import React, { Fragment } from "react";
import BackBar from "../components/back-bar";
import Content from "../components/content";
import PageTitle from "../components/page-title";
import MapContainer from "../components/map-container";
import useGeolocation from "../../logic/use-geolocation";
import Button from "@material-ui/core/Button";
import Placeholder from "../components/placeholder";
import Centering from "../components/centering";
import Caption from "../components/caption";
import { hideDialog, showDialog } from "../../logic/dialogs";
import EnterNameDialog, { ENTER_NAME_DIALOG } from "../components/enter-name-dialog";
import { executeWithDelay } from "../../logic/with-delay";
import { generateLink, setExpiresAt, setLatLng } from "../../logic/hosting";
import moment from "moment";
import SectionTitle from "../components/section-title";
import { navigate } from "hookrouter";

const HostPage = () => {
    const location = useGeolocation();

    // Dialog-Methods
    const handleClose = () => executeWithDelay(() => hideDialog(ENTER_NAME_DIALOG));
    const handleSubmit = () => {
        generateLink();
        executeWithDelay(() => {
            hideDialog(ENTER_NAME_DIALOG);
            navigate("/share");
        });
    };

    // Create button handler --> opens dialog
    const handleClickCreate = () => {
        setLatLng(location.coords.latitude, location.coords.longitude);
        setExpiresAt(moment().add(1, 'days').utc().format());
        executeWithDelay(() => showDialog(ENTER_NAME_DIALOG));
    };

    return (
        <Fragment>
            <BackBar href={"/"}/>
            <Content>
                <PageTitle standard="Ein Spiel hosten"/>

                {/* Map-Section with Title and Map */}
                <SectionTitle standard="Dein Standort"/>
                <MapContainer location={location}/>
                <Placeholder/>

                {/* Create-Button or location permission message */}
                <Centering>
                    <Button disabled={!location} onClick={handleClickCreate}>Spiel hier erstellen</Button>
                    {!location && (
                        <Fragment>
                            <Placeholder/>
                            <Caption>Bitte erlaube den Standort für diese App</Caption>
                        </Fragment>
                    )}
                </Centering>
            </Content>

            {/* The "enter name"-dialog with references to corresponding action handler methods */}
            <EnterNameDialog onSubmit={handleSubmit} onClose={handleClose}/>
        </Fragment>
    );
};

export default HostPage;