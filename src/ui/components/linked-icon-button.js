import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { navigateWithDelay } from "../../logic/with-delay";

const LinkedIconButton = (props) => {
    return (
        <IconButton {...props} onClick={event => {
            event.preventDefault();
            navigateWithDelay(props.href);
        }}>
            {props.children}
        </IconButton>
    );
};

export default LinkedIconButton;