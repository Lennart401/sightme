import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    hugeVerticalPadding: {
        paddingTop: "10vh",
        paddingBottom: "5vh",
        paddingLeft: "1em",
        paddingRight: "1em",
        textAlign: "center"
    },
    hugeVerticalPaddingNoHorizontal: {
        paddingTop: "10vh",
        paddingBottom: "5vh",
        textAlign: "center"
    },
}));

const QuarterPageHeader = ({children, noHorizontalPadding}) => {
    const classes = useStyles();

    return (
        <Box className={noHorizontalPadding ? classes.hugeVerticalPaddingNoHorizontal : classes.hugeVerticalPadding}>
            {children}
        </Box>
    );
};

export default QuarterPageHeader;