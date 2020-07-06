import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import LinkedIconButton from "./linked-icon-button";
import { ArrowBackRounded } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    offsetFromTop: {
        paddingTop: "3vh"
    },
    offset: theme.mixins.toolbar,
    morePadding: {
        paddingLeft: "22px",
        paddingRight: "22px"
    }
}));

const BackBar = ({href, onClick}) => {
    const classes = useStyles();

    if (href) onClick = undefined;

    return (
        <Fragment>
            <AppBar position="sticky" className={classes.offsetFromTop} color="transparent" elevation={0}>
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
            {/*<div className={classes.offset}/>*/}
        </Fragment>
    );
};

export default BackBar;