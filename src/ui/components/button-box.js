import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Content from "./content";
import classNames from "classnames";

const useStyles = makeStyles(() => ({
    buttonBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px",
    }
}));

const ButtonBox = (props) => {
    const classes = useStyles();

    return (
        <Content className={classNames(classes.buttonBox, props.className)}>
            {props.children}
        </Content>
    );
};

export default ButtonBox;