import React, { Fragment } from "react";
import DualColorTypography from "../components/dual-color-typography";
import HalfPageHeader from "../components/half-page-header";
import Caption from "../components/caption";
import Placeholder from "../components/placeholder";
import LinkedButton from "../components/linked-button";
import Centering from "../components/centering";
import { useActiveGame } from "../../logic/active-game";

const IndexPage = () => {
    const game = useActiveGame();

    return (
        <Fragment>
            <HalfPageHeader>
                <DualColorTypography variant="h2" component="h1" standard="Sight" colored="Me"/>
            </HalfPageHeader>
            <Centering>
                <LinkedButton href={"/host"}>Spiel erstellen</LinkedButton>
                <Placeholder/>

                {game && (
                    <LinkedButton href={"/play"}>{game.name}'s Spiel</LinkedButton>
                )}
                {!game && (
                    <Caption>Du nimmst aktuell an keinem aktiven Spiel teil. Du erhältst vom Spielleiter einen Link zum Beitreten.</Caption>
                )}
            </Centering>
        </Fragment>
    );
};

export default IndexPage;