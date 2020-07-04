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
import { generateLink, setExpiresAt, setLatLng, useLink } from "../../logic/hosting";
import moment from "moment";
import LinkedLink from "../components/linked-link";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import { ShareRounded } from "@material-ui/icons";
import SectionTitle from "../components/section-title";
import { setMessage } from "../../logic/messages";

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    link: {
        overflowWrap: "anywhere",
        flexGrow: 1
    },
    shareIconBox: {
        margin: "0px 16px"
    }
}));

const HostPage = () => {
    const classes = useStyles();
    const location = useGeolocation();
    const link = useLink();

    // Dialog-Methods
    const handleClose = () => executeWithDelay(() => hideDialog(ENTER_NAME_DIALOG));
    const handleSubmit = () => {
        handleClose();
        generateLink();
        setMessage("Das Spiel wurde erstellen! Du kannst den Link zum Spiel jetzt teilen oder noch ein neues Spiel erstellen.");
    };

    // Create button handler --> opens dialog
    const handleClickCreate = () => {
        setLatLng(location.coords.latitude, location.coords.longitude);
        setExpiresAt(moment().add(1, 'days').utc().format());
        executeWithDelay(() => showDialog(ENTER_NAME_DIALOG));
    };

    // Share button handler
    const handleClickShare = () => {
        if (navigator.share) {
            navigator.share({
                url: link
            });
        } else {
            setMessage("Dein Browser unterstützt das Teilen von Links nicht. Bitte kopiere den Link und verschicke ihn manuell.");
        }
    };

    return (
        <Fragment>
            <BackBar href={"/"}/>
            <Content>
                <PageTitle standard="Ein Spiel hosten"/>

                {/* Map-Section with Title and Map */}
                <SectionTitle standard="Karte"/>
                <MapContainer location={location}/>
                <Placeholder/>

                {/* Link-Section with Title, Link and Share Icon */}
                {link && (
                    <Fragment>
                        <SectionTitle standard="Link zum Teilen"/>
                        <Box className={classes.container}>

                            <LinkedLink href={link} color="inherit" className={classes.link}>{link}</LinkedLink>
                            <Box className={classes.shareIconBox}>
                                <IconButton onClick={handleClickShare}>
                                    <ShareRounded/>
                                </IconButton>
                            </Box>
                        </Box>

                        <Placeholder/>
                    </Fragment>
                )}

                {/* Create Button or location permission message */}
                <Centering>
                    <Button disabled={!location} onClick={handleClickCreate}>{link ? "Neues " : ""}Spiel erstellen</Button>
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