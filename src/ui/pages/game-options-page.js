import React, { useEffect } from "react";
import { navigate, useTitle } from "hookrouter";
import {
    generateLink, options, setOption,
    useCurrentData, useOption,
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

    const enableTendency = useOption(options.TENDENCY);
    const enableDynamicDistance = useOption(options.DYNAMIC_DISTANCE);
    const enableNoDistance = useOption(options.NO_DISTANCE);

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
                    control={<Switch checked={enableTendency} onChange={event => setOption(options.TENDENCY, event.target.checked)}/>}
                />
                <Caption>Zeige den Teilnehmern an, ob sie auf dich zu oder von dir weg laufen.</Caption>

                <Placeholder/>

                <LabelWithControl
                    label="Dynamisch Distanz verwenden"
                    control={<Switch checked={enableDynamicDistance} onChange={event => setOption(options.DYNAMIC_DISTANCE, event.target.checked)}/>}
                />
                <Caption>
                    Wenn eingeschaltet, wird der blinkende Kreis beim Beitreten des Spiels dynamisch berechnet. Sinnvoll zusammen mit
                    "Distanz ausblenden", wenn man nicht weit von den Teilnehmern entfernt ist.
                </Caption>

                <Placeholder/>

                <LabelWithControl
                    label="Distanz ausblenden"
                    control={<Switch checked={enableNoDistance} onChange={event => setOption(options.NO_DISTANCE, event.target.checked)}/>}
                />
                <Caption>Den Teilnehmern nicht die Distanz zu dir anzeigen.</Caption>
            </FullHeightContent>

            <ButtonBox>
                <Button onClick={onSubmit}>Weiter</Button>
                <LinkedButton variant="text" color="inherit" href={"enter-name"}>Zurück</LinkedButton>
            </ButtonBox>
        </FullHeightWrapper>
    );
};

export default GameOptionsPage;