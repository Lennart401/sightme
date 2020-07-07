import React, { Fragment } from "react";
import { Base64 } from "js-base64";
import BackBar from "../components/back-bar";
import Content from "../components/content";
import PageTitle from "../components/page-title";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import Centering from "../components/centering";
import Placeholder from "../components/placeholder";
import { makeStyles } from "@material-ui/core/styles";
import LinkedButton from "../components/linked-button";
import Button from "@material-ui/core/Button";
import { setActiveGame } from "../../logic/active-game";
import { navigateWithDelay } from "../../logic/with-delay";
import FullHeightWrapper from "../components/full-height-wrapper";
import FullHeightContent from "../components/full-height-content";
import { useTitle } from "hookrouter";

const useStyles = makeStyles(() => ({
    buttonBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px",
    }
}));

const JoinPage = ({gameBase64}) => {
    const classes = useStyles();

    let game = undefined;
    try {
        game = JSON.parse(Base64.decode(gameBase64));
    } catch (e) {}

    useTitle(`${game?.name} beitreten | SightMe`);

    const validHours = moment(game?.expiresAt).diff(moment(), 'hours');
    const isValid = moment().isBefore(moment(game?.expiresAt));

    const handleClickJoin = () => {
        setActiveGame(game);
        navigateWithDelay("/play");
    };

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
                        </Fragment>
                    )}
                    {!game && (
                        <Typography variant="h5">Im Link befindet sich kein gültiges Spiel. Bitte deinen Spielleiter, dir den Link noch einmal zu schicken.</Typography>
                    )}
                </Centering>
            </FullHeightContent>

            <Content className={classes.buttonBox}>
                <Button onClick={handleClickJoin} disabled={!game || !isValid}>Spiel beitreten</Button>
                <LinkedButton href={"/"} variant="text" color="inherit" style={{marginTop: "6px"}}>Abbrechen</LinkedButton>
            </Content>
        </FullHeightWrapper>
    );
};

export default JoinPage;