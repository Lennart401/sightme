import React, { Fragment } from "react";
import { Base64 } from "js-base64";
import BackBar from "../components/back-bar";
import Content from "../components/content";
import PageTitle from "../components/page-title";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import Centering from "../components/centering";
import Placeholder from "../components/placeholder";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import LinkedButton from "../components/linked-button";
import Button from "@material-ui/core/Button";
import { setActiveGame } from "../../logic/active-game";
import { navigateWithDelay } from "../../logic/with-delay";

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        width: "100%",
        marginBottom: "8px"
    }
}));

const JoinPage = ({gameBase64}) => {
    const classes = useStyles();

    const game = JSON.parse(Base64.decode(gameBase64));
    const validHours = moment(game?.expiresAt).diff(moment(), 'hours');

    const handleClickJoin = () => {
        setActiveGame(game);
        navigateWithDelay("/play");
    };

    return (
        <Fragment>
            <BackBar href={"/"}/>
            <Content>
                <PageTitle standard="Einem Spiel beitreten"/>
                <Placeholder factor={2}/>

                <Centering>
                    {game && (
                        <Fragment>
                            <Typography variant="h4">Host: {game?.name}</Typography><br/>
                            {validHours >= 0 && (
                                <Typography variant="body1">gültig für die nächsten {validHours} Stunde(n)</Typography>
                            )}
                            {validHours < 0 && (
                                <Typography variant="body1">Das Spiel ist bereit abgelaufen, du kannst ihm nicht mehr beitreten.</Typography>
                            )}
                        </Fragment>
                    )}
                    {!game && (
                        <Typography variant="h5">Im Link befindet sich kein gültiges Spiel. Bitte deinen Spielleiter, dir den Link noch einmal zu schicken.</Typography>
                    )}
                </Centering>
            </Content>

            <Box className={classes.container}>
                <Button onClick={handleClickJoin}>Spiel beitreten</Button>
                <LinkedButton href={"/"} variant="text" color="inherit" style={{marginTop: "6px"}}>Abbrechen</LinkedButton>
            </Box>
        </Fragment>
    );
};

export default JoinPage;