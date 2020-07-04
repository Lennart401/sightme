import React from "react";
import Button from "@material-ui/core/Button";
import {navigateWithDelay} from "../../logic/with-delay";

const LinkedButton = (props) => {
    return (
        <Button {...props} onClick={event => {
            event.preventDefault();
            navigateWithDelay(props.href);
        }}>
            {props.children}
        </Button>
    );
};

export default LinkedButton;