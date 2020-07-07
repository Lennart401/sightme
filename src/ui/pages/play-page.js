import React, { Fragment, useLayoutEffect, useState } from "react";
import BackBar from "../components/back-bar";
import Content from "../components/content";
import PageTitle from "../components/page-title";
import { leaveActiveGame, useActiveGame } from "../../logic/active-game";
import { navigate, useTitle } from "hookrouter";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Centering from "../components/centering";
import { executeWithDelay } from "../../logic/with-delay";
import Placeholder from "../components/placeholder";
import Typography from "@material-ui/core/Typography";
import ConfirmDialog from "../components/confirm-dialog";
import { hideDialog, showDialog, useDialogState } from "../../logic/dialogs";
import useDistance from "../../logic/use-distance";
import Tendency from "../components/tendency";
import Distance from "../components/distance";
import LargeRipple from "../components/large-ripple";

const useStyles = makeStyles(() => ({
    buttonWrapper: {
        position: "fixed",
        bottom: 0,
        width: "100%",
        marginBottom: "24px"
    },
}));

const CONFIRM_LEAVE_DIALOG = "confirm-leave-dialog";

const PlayPage = () => {
    const game = useActiveGame();
    const {distance, frequency} = useDistance();
    const classes = useStyles();
    const confirm = useDialogState(CONFIRM_LEAVE_DIALOG);

    useTitle(`Finde ${game?.name} | SightMe`);

    const [useAnimation, setUseAnimation] = useState(true);
    const [lastFrequency, setLastFrequency] = useState(0.8);
    const [lastDistance, setLastDistance] = useState(2500);
    const [tendency, setTendency] = useState(null);

    if (lastDistance !== distance) {
        setTendency(distance < lastDistance ? 'up' : 'down');
        setLastDistance(distance);
    }

    const handleIteration = () => {
        if (lastFrequency !== frequency) {
            setLastFrequency(frequency);
            setUseAnimation(false);
            setTimeout(() => {
                setUseAnimation(true);
            }, 10);
        }
    };

    const handleLeave = () => {
        leaveActiveGame();
        navigate("/");
    };

    useLayoutEffect(() => {
        return () => {
            hideDialog(CONFIRM_LEAVE_DIALOG);
        };
    }, []);

    return (
        <Fragment>
            <BackBar href={"/"}/>
            {game && (
                <Fragment>
                    <Content>
                        <PageTitle standard="Finde " colored={game.name}/>
                        <Placeholder/>

                        <Centering>
                            <LargeRipple enable={useAnimation} frequency={lastFrequency} handleIteration={handleIteration}/>
                            <Placeholder/>
                            <Typography variant="body1">Distanz <Distance distance={lastDistance}/> <Tendency game={game} tendency={tendency}/></Typography>
                        </Centering>
                    </Content>

                    <Placeholder factor={3}/>

                    <Centering className={classes.buttonWrapper}>
                        <Button onClick={() => executeWithDelay(() => showDialog(CONFIRM_LEAVE_DIALOG))}>Spiel verlassen</Button>
                    </Centering>

                    <ConfirmDialog open={confirm?.show || false}
                                   title="Spiel verlassen"
                                   text="Möchtest du das Spiel wirklich verlassen?"
                                   onNo={() => hideDialog(CONFIRM_LEAVE_DIALOG)}
                                   onYes={handleLeave}/>
                </Fragment>
            )}
            {!game && (
                <Content>
                    <PageTitle standard="Finde " colored="???"/>
                    <Placeholder factor={2}/>
                    <Centering>
                        <Typography variant="h5">Es wurde kein aktives Spiel gefunden. Bitte trete erst einem Spiel bei.</Typography>
                    </Centering>
                </Content>
            )}
        </Fragment>
    );
};

export default PlayPage;