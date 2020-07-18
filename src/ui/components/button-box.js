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

        "& > :not(:first-child)": {
            marginTop: "6px"
        }
    }
}));

const ButtonBox = (props) => {
    const classes = useStyles();

    return (
        <Content style={props.style} className={classNames(props.className, classes.buttonBox)}>
            {props.children}
        </Content>
    );
};

export default ButtonBox;