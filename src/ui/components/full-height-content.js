import React from "react";
import { Box } from "@material-ui/core";
import Content from "./content";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    fullHeightContent: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: "auto"
    }
}));

const FullHeightContent = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.fullHeightContent}>
            <Content {...props}>
                {props.children}
            </Content>
        </Box>
    );
};

export default FullHeightContent;