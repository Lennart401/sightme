import React from "react";
import Link from "@material-ui/core/Link";
import { navigateWithDelay } from "../../logic/with-delay";

const LinkedLink = (props) => {
    return <Link {...props} onClick={event => {
        event.preventDefault();
        navigateWithDelay(props.href);
    }}/>;
};

export default LinkedLink;