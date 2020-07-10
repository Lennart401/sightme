import React, { useEffect } from "react";
import { navigate, useTitle } from "hookrouter";
import { generateLink, setEnableTendency, useCurrentData, useEnableTendency } from "../../logic/hosting";
import { navigateWithDelay } from "../../logic/with-delay";
import FullHeightWrapper from "../components/full-height-wrapper";
import BackBar from "../components/back-bar";
import FullHeightContent from "../components/full-height-content";
import QuarterPageHeader from "../components/quarter-page-header";
import Typography from "@material-ui/core/Typography";
import Centering from "../components/centering";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import ButtonBox from "../components/button-box";
import Button from "@material-ui/core/Button";
import LinkedButton from "../components/linked-button";

const GameOptionsPage = () => {
    useTitle("Spiel hosten | SightMe");

    const enableTendency = useEnableTendency();
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
                <Centering>
                    <FormControlLabel
                        control={<Switch checked={enableTendency} onChange={event => setEnableTendency(event.target.checked)}/>}
                        label="Richtungs-Tendenz anzeigen"
                        labelPlacement="start"/>
                </Centering>
            </FullHeightContent>

            <ButtonBox>
                <Button onClick={onSubmit}>Weiter</Button>
                <LinkedButton variant="text" color="inherit" href={"enter-name"}>Zurück</LinkedButton>
            </ButtonBox>
        </FullHeightWrapper>
    );
};

export default GameOptionsPage;