import React, { useEffect } from "react";
import { generateLink, setEnableTendency, setUsername, useCurrentData, useEnableTendency } from "../../logic/hosting";
import useCheckedTextfield from "../components/checked-textfield";
import { navigate, useTitle } from "hookrouter";
import FullHeightWrapper from "../components/full-height-wrapper";
import BackBar from "../components/back-bar";
import FullHeightContent from "../components/full-height-content";
import ButtonBox from "../components/button-box";
import QuarterPageHeader from "../components/quarter-page-header";
import Typography from "@material-ui/core/Typography";
import Centering from "../components/centering";
import Caption from "../components/caption";
import Placeholder from "../components/placeholder";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import LinkedButton from "../components/linked-button";
import { navigateWithDelay } from "../../logic/with-delay";

const EnterNamePage = () => {
    useTitle("Spiel hosten | SightMe");

    const enableTendency = useEnableTendency();
    const {validate, text, component} = useCheckedTextfield({placeholder: "Dein Name"}, 20);
    const currentData = useCurrentData();

    useEffect(() => {
        if (!currentData.latitude || !currentData.longitude) {
            navigate("/host");
        }
    }, [currentData]);

    const onSubmit = () => {
        generateLink();
        navigateWithDelay("/share", true);
    };

    return (
        <FullHeightWrapper>
            <BackBar href={"/host"}/>

            <FullHeightContent>
                <QuarterPageHeader noHorizontalPadding>
                    <Typography variant="h4" component="h1">Bitte gib deinen Namen ein.</Typography>
                </QuarterPageHeader>
                <Centering>
                    <Caption>Damit wissen die Teilnehmer, dass sie wirklich deinem Spiel beitreten.</Caption>
                    <Placeholder/>
                    {component}
                    <Placeholder/>
                    <FormControlLabel
                        control={<Switch checked={enableTendency} onChange={event => setEnableTendency(event.target.checked)}/>}
                        label="Richtungs-Tendenz anzeigen"
                        labelPlacement="start"/>
                </Centering>
            </FullHeightContent>

            <ButtonBox>
                <Button onClick={() => {
                    if (validate()) {
                        setUsername(text);
                        onSubmit();
                    }
                }}>Spiel erstellen</Button>
                <LinkedButton variant="text" color="inherit" href={"/host"}>Abbrechen</LinkedButton>
            </ButtonBox>
        </FullHeightWrapper>
    );
};

export default EnterNamePage;