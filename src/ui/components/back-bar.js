import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import LinkedIconButton from "./linked-icon-button";
import { ArrowBackRounded } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
    offsetFromTop: {
        paddingTop: "3vh"
    },
    offset: theme.mixins.toolbar,
    morePadding: {
        paddingLeft: "21px",
        paddingRight: "21px"
    }
}));

const BackBar = ({href, onClick}) => {
    const classes = useStyles();

    if (href) onClick = undefined;
    if (!href && !onClick) onClick = () => window.history.back();

    return (
        <Fragment>
            <AppBar position="fixed" className={classes.offsetFromTop} color="transparent" elevation={0}>
                <Toolbar className={classes.morePadding}>
                    {href && (
                        <LinkedIconButton href={href} edge="start" aria-label="back">
                            <ArrowBackRounded/>
                        </LinkedIconButton>
                    )}
                    {onClick && (
                        <IconButton onClick={onClick} edge="start" aria-label="back">
                            <ArrowBackRounded/>
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
            <div className={classNames(classes.offset, classes.offsetFromTop)}/>
        </Fragment>
    );
};

export default BackBar;