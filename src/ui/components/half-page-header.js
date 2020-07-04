import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    hugeVerticalPadding: {
        paddingTop: "25vh",
        paddingBottom: "15vh",
        paddingLeft: "1em",
        paddingRight: "1em",
        textAlign: "center"
    },
    hugeVerticalPaddingNoHorizontal: {
        paddingTop: "25vh",
        paddingBottom: "15vh",
        textAlign: "center"
    },
}));

const HalfPageHeader = ({children, noHorizontalPadding}) => {
    const classes = useStyles();

    return (
        <Box className={noHorizontalPadding ? classes.hugeVerticalPaddingNoHorizontal : classes.hugeVerticalPadding}>
            {children}
        </Box>
    );
};

export default HalfPageHeader;