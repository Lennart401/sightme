import React from "react";
import { useDialogState } from "../../logic/dialogs";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import BackBar from "./back-bar";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import Caption from "./caption";
import QuarterPageHeader from "./quarter-page-header";
import Centering from "./centering";
import Placeholder from "./placeholder";
import Button from "@material-ui/core/Button";
import useCheckedTextfield from "./checked-textfield";
import { setEnableTendency, setUsername, useEnableTendency } from "../../logic/hosting";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export const ENTER_NAME_DIALOG = "enter-name-dialog";

const EnterNameDialog = ({onSubmit, onClose}) => {
    const state = useDialogState(ENTER_NAME_DIALOG);
    const enableTendency = useEnableTendency();
    const {validate, text, component} = useCheckedTextfield({placeholder: "Dein Name"}, 20);

    return (
        <Dialog fullScreen={true} open={state?.show || false} onClose={onClose}>
            <BackBar onClick={onClose}/>
            <DialogContent>
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
                        label="Richtungs-Tendenz anzeigen?"
                        labelPlacement="start"/>
                </Centering>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {
                    if (validate()) {
                        setUsername(text);
                        onSubmit();
                    }
                }}>Spiel erstellen</Button>
                <Button variant="text" color="inherit" onClick={onClose}>Abbrechen</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EnterNameDialog;