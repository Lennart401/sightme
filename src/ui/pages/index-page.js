import React from "react";
import DualColorTypography from "../components/dual-color-typography";
import HalfPageHeader from "../components/half-page-header";
import Box from "@material-ui/core/Box";
import Caption from "../components/caption";
import Placeholder from "../components/placeholder";
import LinkedButton from "../components/linked-button";
import Centering from "../components/centering";

const IndexPage = () => {
    return (
        <Box>
            <HalfPageHeader>
                <DualColorTypography variant="h2" component="h1" standard="Sight" colored="Me"/>
            </HalfPageHeader>
            <Centering>
                <LinkedButton href={"host"}>Spiel erstellen</LinkedButton>
                <Placeholder/>

                <Caption>Du nimmst aktuell an keinem aktiven Spiel teil. Du erhältst vom Spielleiter einen Link zum Beitreten.</Caption>
            </Centering>
        </Box>
    );
};

export default IndexPage;