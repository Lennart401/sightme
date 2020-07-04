import React from "react";
import Typography from "@material-ui/core/Typography";

const Caption = ({children}) => {
    return (
        <Typography variant="body2" color="textSecondary" style={{marginLeft: "2em", marginRight: "2em"}}>{children}</Typography>
    );
};

export default Caption;