import React, { Fragment, useLayoutEffect, useState } from "react";
import BackBar from "../components/back-bar";
import Content from "../components/content";
import PageTitle from "../components/page-title";
import { leaveActiveGame, useActiveGame } from "../../logic/active-game";
import { navigate } from "hookrouter";
import { setMessage } from "../../logic/messages";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Centering from "../components/centering";
import { executeWithDelay } from "../../logic/with-delay";
import Placeholder from "../components/placeholder";
import Typography from "@material-ui/core/Typography";
import ConfirmDialog from "../components/confirm-dialog";
import { hideDialog, showDialog, useDialogState } from "../../logic/dialogs";
import useDistance from "../../logic/use-distance";

const useStyles = makeStyles(() => ({
    buttonWrapper: {
        position: "fixed",
        bottom: 0,
        width: "100%",
        marginBottom: "24px"
    },
    oneToOneContainer: {
        width: "100%",
        paddingTop: "100%",
        position: "relative",
    },
    oneToOneItem: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
}));

const CONFIRM_LEAVE_DIALOG = "confirm-leave-dialog";

const PlayPage = () => {
    const game = useActiveGame();
    const {distance, frequency} = useDistance();
    const classes = useStyles();
    const confirm = useDialogState(CONFIRM_LEAVE_DIALOG);

    const [useAnimation, setUseAnimation] = useState(true);
    const [savedFrequency, setSavedFrequency] = useState(0.8);

    if (!game.name) {
        navigate("/");
        setMessage("Kein aktives Spiel gefunden!");
    }

    const handleLeave = () => {
        leaveActiveGame();
        navigate("/");
    };

    const handleIteration = () => {
        if (savedFrequency !== frequency) {
            setSavedFrequency(frequency);
            setUseAnimation(false);
            setTimeout(() => {
                setUseAnimation(true);
            }, 10);
        }
    };

    useLayoutEffect(() => {
        return () => {
            hideDialog(CONFIRM_LEAVE_DIALOG);
        };
    }, []);

    const displayDistance = distance < 500 ? "< 500 m" : "~ " + (Math.round(distance * 0.002) * 0.5) + " km";

    return (
        <Fragment>
            <BackBar href={"/"}/>
            <Content>
                <PageTitle standard="Finde " colored={game.name}/>
                <Placeholder/>

                <Centering>
                    <Box className={classes.oneToOneContainer}>
                        <Box style={{
                            position: "absolute",
                            top: 0, left: 0, bottom: 0, right: 0,
                            animation: useAnimation ? `ripple ${(1 / savedFrequency)}s ease-out infinite` : "none"
                        }}
                             className="ripple"
                             onAnimationIteration={handleIteration}/>
                    </Box>

                    <Placeholder/>
                    <Typography variant="body1">Distanz {displayDistance}</Typography>
                </Centering>
            </Content>

            <Placeholder factor={3}/>

            <Centering className={classes.buttonWrapper}>
                <Button onClick={() => executeWithDelay(() => showDialog(CONFIRM_LEAVE_DIALOG))}>Spiel
                    verlassen</Button>
            </Centering>

            <ConfirmDialog open={confirm?.show || false}
                           title="Spiel verlassen"
                           text="Möchtest du das Spiel wirklich verlassen?"
                           onNo={() => hideDialog(CONFIRM_LEAVE_DIALOG)}
                           onYes={handleLeave}/>
        </Fragment>
    );
};

export default PlayPage;