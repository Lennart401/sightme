import React from "react";
import { Box } from "@material-ui/core";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    fullHeightWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%"
    }
}));

const FullHeightWrapper = (props) => {
    const classes = useStyles();

    return (
        <Box {...props} className={classNames(classes.fullHeightWrapper, props.className)}>
            {props.children}
        </Box>
    );
};

export default FullHeightWrapper;