import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "auto",
        border: "2px solid black",
        borderRadius: "100vh",
        padding: "8px",
        height: "50vh",
        width: "20vw"
    },
    mask: {
        height: "100%",
        borderRadius: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end"
    },
    element: {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "1em",
        width: "100%"
    }
}));

const VerticalBar = ({percentage, style, className}) => {
    const classes = useStyles();

    return (
        <Box style={style} className={classNames(classes.container, className)}>
            <Box className={classes.mask}>
                <Box style={{height: `${percentage * 100}%`}} className={classes.element}/>
            </Box>
        </Box>
    );
};

export default VerticalBar;