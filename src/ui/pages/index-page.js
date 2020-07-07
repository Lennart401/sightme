import React from "react";
import DualColorTypography from "../components/dual-color-typography";
import HalfPageHeader from "../components/half-page-header";
import Caption from "../components/caption";
import Placeholder from "../components/placeholder";
import LinkedButton from "../components/linked-button";
import Centering from "../components/centering";
import { useActiveGame } from "../../logic/active-game";
import Content from "../components/content";
import FullHeightWrapper from "../components/full-height-wrapper";
import FullHeightContent from "../components/full-height-content";
import { makeStyles } from "@material-ui/core/styles";
import { useTitle } from "hookrouter";

const useStyles = makeStyles(() => ({
    about: {
        marginBottom: "8px"
    }
}));

const IndexPage = () => {
    useTitle("SightMe");
    const game = useActiveGame();
    const classes = useStyles();

    return (
        <FullHeightWrapper>
            <FullHeightContent>
                <HalfPageHeader noHorizontalPadding>
                    <DualColorTypography variant="h2" component="h1" standard="Sight" colored="Me"/>
                </HalfPageHeader>
                <Centering>
                    <LinkedButton href={"/host"}>Spiel erstellen</LinkedButton>
                    <Placeholder/>

                    {game && (
                        <LinkedButton href={"/play"}>{game.name}'s Spiel</LinkedButton>
                    )}
                    {!game && (
                        <Caption margin="1em">Du nimmst aktuell an keinem aktiven Spiel teil. Du erhältst vom Spielleiter einen Link zum Beitreten.</Caption>
                    )}
                </Centering>
            </FullHeightContent>

            <Content className={classes.about}>
                <Centering>
                    <LinkedButton variant="text" href={"/about"}>Über die App</LinkedButton>
                </Centering>
            </Content>
        </FullHeightWrapper>
    );
};

export default IndexPage;