import React from "react";
import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    alignInLine: {
        verticalAlign: "middle"
    }
}));

const Tendency = ({game, tendency}) => {
    const classes = useStyles();

    if (game?.assist?.tendency) {
        if (tendency === 'up') {
            return <KeyboardArrowUpRounded className={classes.alignInLine}/>;
        } else if (tendency === 'down') {
            return <KeyboardArrowDownRounded className={classes.alignInLine}/>;
        }
    }

    return "";
}

export default Tendency;