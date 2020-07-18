import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const useStyles = makeStyles(() => ({
    content: {
        marginLeft: "24px",
        marginRight: "24px"
    }
}));

const Content = (props) => {
    const classes = useStyles();

    return (
        <Box {...props} className={classNames(props.className, classes.content)}>
            {props.children}
        </Box>
    );
};

export default Content;