import React from "react";
import Typography from "@material-ui/core/Typography";

const Caption = ({children, margin = "0em"}) => {
    return (
        <Typography variant="body2" color="textSecondary" style={{marginLeft: margin, marginRight: margin}}>{children}</Typography>
    );
};

export default Caption;