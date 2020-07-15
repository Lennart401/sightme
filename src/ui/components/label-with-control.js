import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
    wrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
}));

const LabelWithControl = ({label, control}) => {
    const classes = useStyles();

    return (
        <Box className={classes.wrapper}>
            <Typography variant="body1">{label}</Typography>
            {control}
        </Box>
    );
};

export default LabelWithControl;