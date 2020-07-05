import React, { useLayoutEffect, useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Alert } from "./alert";
import { clearMessage, useMessage } from "../../logic/messages";

/**
 * Use can either use useAlert = true with severity OR action with actionName
 */
const StateSnackbar = ({stateName, useAlert = true, severity = "error", actionName = "Rückgängig", action = null}) => {
    const errorMessage = useMessage(stateName);

    const error = errorMessage;
    const open = !!errorMessage;
    const [latestError, setLatestError] = useState("");

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        if (open) {
            clearMessage(stateName);
        }
    };

    let alert = null;
    if (useAlert) {
        alert = (
            <Alert severity={severity} onClose={handleClose}>
                {latestError}
            </Alert>
        );
    }

    useLayoutEffect(() => {
        if (error) {
            setLatestError(error);
        }
    }, [error]);

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={open}
            autoHideDuration={6000}
            // action={action && <Button onClick={action} size="small" color="secondary">{actionName}</Button>}
            message={!useAlert && latestError}
            onClose={handleClose}
            action={!useAlert && (
                <React.Fragment>
                    {action && (
                        <Button color="secondary" size="small" onClick={action}>
                            {actionName}
                        </Button>
                    )}
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small"/>
                    </IconButton>
                </React.Fragment>
            )}>
            {alert}
        </Snackbar>
    );
};

export default StateSnackbar;