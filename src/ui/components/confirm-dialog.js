import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Centering from "./centering";

const ConfirmDialog = ({open, text, onYes, onNo}) => {
    return (
        <Dialog open={open} onClose={onNo}>
            <DialogContent>
                <Centering>
                    <Typography variant="body1">{text}</Typography>
                </Centering>
            </DialogContent>
            <DialogActions style={{flexDirection: "row", justifyContent: "center", alignItems: "baseline", paddingBottom: "16px"}}>
                <Button variant="text" color="inherit" onClick={onNo}>Nein</Button>
                <Button onClick={onYes}>Ja</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;

