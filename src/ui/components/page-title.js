import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DualColorTypography from "./dual-color-typography";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    titlePadding: {
        paddingTop: "0.5em",
        paddingBottom: "3em"
    }
}));

const PageTitle = ({standard, colored}) => {
    const classes = useStyles();
    const variant = "h6";

    if (colored) {
        return (
            <Box className={classes.titlePadding}>
                <DualColorTypography variant={variant} component="h1" standard={standard} colored={colored}/>
            </Box>
        );
    } else {
        return (
            <Box className={classes.titlePadding}>
                <Typography variant={variant} component="h1">{standard}</Typography>
            </Box>
        );
    }
};

export default PageTitle;