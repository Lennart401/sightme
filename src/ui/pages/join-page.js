import React, { Fragment } from "react";
import { Base64 } from "js-base64";
import BackBar from "../components/back-bar";
import PageTitle from "../components/page-title";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import Centering from "../components/centering";
import Placeholder from "../components/placeholder";
import LinkedButton from "../components/linked-button";
import Button from "@material-ui/core/Button";
import { setActiveGame } from "../../logic/active-game";
import { navigateWithDelay } from "../../logic/with-delay";
import FullHeightWrapper from "../components/full-height-wrapper";
import FullHeightContent from "../components/full-height-content";
import { useTitle } from "hookrouter";
import ButtonBox from "../components/button-box";
import Caption from "../components/caption";

const JoinPage = ({gameBase64}) => {
    let game = undefined;
    try {
        game = JSON.parse(Base64.decode(gameBase64));
    } catch (e) {}

    useTitle(`${game?.name} beitreten | SightMe`);

    const validHours = moment(game?.expiresAt).diff(moment(), 'hours');
    const isValid = moment().isBefore(moment(game?.expiresAt));

    const handleClickJoin = () => {
        setActiveGame(game);

        if (game.assist?.dyndist) {
            navigateWithDelay(`/join/${gameBase64}/confirm-position`);
        } else {
            navigateWithDelay("/play");
        }
    };

    let infoLines = [];
    if (!game?.assist?.tendency) infoLines.push("Keine Richtungs-Tendenz verfügbar für dieses Spiel");
    if (game?.assist?.dyndist) {
        if (game?.assist?.nodist) infoLines.push("Spiel mit dynamischer Distanz");
        else infoLines.push("Spiel mit dynamischer Distanz — du siehst trotzdem die Distanz zum Host")
    }
    if (game?.assist?.nodist) infoLines.push("Keine Distanz-Anzeige — du siehst nur den blinkenden Kreis")

    return (
        <FullHeightWrapper>
            <BackBar href={"/"}/>
            <FullHeightContent>
                <PageTitle standard="Einem Spiel beitreten"/>
                <Placeholder factor={2}/>

                <Centering>
                    {game && (
                        <Fragment>
                            <Typography variant="h4">Host: {game?.name}</Typography><br/>
                            {isValid && (
                                <Typography variant="body1">gültig für die nächsten {validHours} Stunde(n)</Typography>
                            )}
                            {!isValid && (
                                <Typography variant="body1">Das Spiel ist bereit abgelaufen, du kannst ihm nicht mehr beitreten.</Typography>
                            )}

                            {infoLines.length && <Placeholder factor={2}/>}

                            {infoLines.map(line => (
                                <Fragment>
                                    <Caption>{line}</Caption>
                                    <Placeholder factor={0.5}/>
                                </Fragment>
                            ))}
                        </Fragment>
                    )}
                    {!game && (
                        <Typography variant="h5">Im Link befindet sich kein gültiges Spiel. Bitte deinen Spielleiter, dir den Link noch einmal zu schicken.</Typography>
                    )}
                </Centering>
            </FullHeightContent>

            <ButtonBox>
                <Button onClick={handleClickJoin} disabled={!game || !isValid}>Spiel beitreten</Button>
                <LinkedButton href={"/"} variant="text" color="inherit">Abbrechen</LinkedButton>
            </ButtonBox>
        </FullHeightWrapper>
    );
};

export default JoinPage;