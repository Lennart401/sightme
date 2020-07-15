import React, { useEffect } from "react";
import { navigate, useTitle } from "hookrouter";
import {
    generateLink,
    setEnableDynamicDistance,
    setEnableTendency,
    useCurrentData,
    useEnableDynamicDistance,
    useEnableTendency
} from "../../logic/hosting";
import { navigateWithDelay } from "../../logic/with-delay";
import FullHeightWrapper from "../components/full-height-wrapper";
import BackBar from "../components/back-bar";
import FullHeightContent from "../components/full-height-content";
import QuarterPageHeader from "../components/quarter-page-header";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import ButtonBox from "../components/button-box";
import Button from "@material-ui/core/Button";
import LinkedButton from "../components/linked-button";
import LabelWithControl from "../components/label-with-control";
import Caption from "../components/caption";
import Placeholder from "../components/placeholder";

const GameOptionsPage = () => {
    useTitle("Spiel hosten | SightMe");

    const enableTendency = useEnableTendency();
    const enableDynamicDistance = useEnableDynamicDistance();
    const currentData = useCurrentData();

    useEffect(() => {
        if (!currentData.latitude || !currentData.longitude) {
            navigate("/host");
        }

        if (!currentData.name) {
            navigate("/host/enter-name");
        }
    }, [currentData]);

    const onSubmit = () => {
        generateLink();
        navigateWithDelay("/share", true);
    };

    return (
        <FullHeightWrapper>
            <BackBar href={"enter-name"}/>

            <FullHeightContent>
                <QuarterPageHeader noHorizontalPadding>
                    <Typography variant="h4" component="h1">Spieloptionen</Typography>
                </QuarterPageHeader>
                <LabelWithControl
                    label="Richtungs-Tendenz anzeigen"
                    control={<Switch checked={enableTendency} onChange={event => setEnableTendency(event.target.checked)}/>}
                />
                <Caption>Zeige den Teilnehmern an, ob sie auf dich zu oder von dir weg laufen.</Caption>
                <Placeholder/>
                <LabelWithControl
                    label="Dynamisch Distanz verwenden"
                    control={<Switch checked={enableDynamicDistance} onChange={event => setEnableDynamicDistance(event.target.checked)}/>}
                />
                <Caption>Den Teilnehmer nicht die Distanz zu dir anzeigen, sondern nur den blinkenden Kreis. Die Anfang- Blink- Frequenz wird dynamisch berechnet.</Caption>
            </FullHeightContent>

            <ButtonBox>
                <Button onClick={onSubmit}>Weiter</Button>
                <LinkedButton variant="text" color="inherit" href={"enter-name"}>Zurück</LinkedButton>
            </ButtonBox>
        </FullHeightWrapper>
    );
};

export default GameOptionsPage;