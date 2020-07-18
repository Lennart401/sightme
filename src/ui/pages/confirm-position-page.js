import React from "react";
import BackBar from "../components/back-bar";
import ActiveGameWrapper from "../components/active-game-wrapper";
import QuarterPageHeader from "../components/quarter-page-header";
import Typography from "@material-ui/core/Typography";
import Centering from "../components/centering";
import Caption from "../components/caption";
import MapContainer from "../components/map-container";
import useGeolocation from "../../logic/use-geolocation";
import FullHeightWrapper from "../components/full-height-wrapper";
import FullHeightContent from "../components/full-height-content";
import Placeholder from "../components/placeholder";
import ButtonBox from "../components/button-box";
import Button from "@material-ui/core/Button";
import LinkedButton from "../components/linked-button";
import useDistance from "../../logic/use-distance";
import { setInitialDistance } from "../../logic/active-game";
import { navigateWithDelay } from "../../logic/with-delay";

const ConfirmPositionPage = ({gameBase64}) => {
    const location = useGeolocation();
    const {distance} = useDistance();

    const handleClick = () => {
        setInitialDistance(distance);
        navigateWithDelay("/play");
    };

    return (
        <FullHeightWrapper>
            <BackBar href={`/join/${gameBase64}`}/>
            <ActiveGameWrapper>
                <FullHeightContent>
                    <QuarterPageHeader>
                        <Typography variant="h4" component="h1">Bitte bestätige deine Position.</Typography>
                    </QuarterPageHeader>

                    <Centering>
                        <Caption>
                            Der Host hat festgelegt, dass dieses Spiel mit dynamischer Distanz gespielt wird.
                            Bitte bestätige, dass du wirklich dort bist, wo du auf der Karte angezeigt wirst,
                            damit wir den blinkenden Kreis richtig berechnen können.
                        </Caption>
                    </Centering>
                    <Placeholder/>

                    <MapContainer location={location}/>
                </FullHeightContent>

                <ButtonBox>
                    <Button onClick={handleClick}>Position bestätigen</Button>
                    <LinkedButton href={`/join/${gameBase64}`} variant="text" color="inherit">Zurück</LinkedButton>
                </ButtonBox>
            </ActiveGameWrapper>
        </FullHeightWrapper>
    );
};

export default ConfirmPositionPage;