import React from "react";
import Typography from "@material-ui/core/Typography";

const DualColorTypography = ({standard, colored, variant, component}) => {
    return (
        <Typography component={component || "div"} variant={variant || "body1"}>
            <Typography component="span" variant={variant || "body1"}>{standard}</Typography>
            <Typography component="span" color="secondary" variant={variant || "body1"}>{colored}</Typography>
        </Typography>
    );
};

export default DualColorTypography;