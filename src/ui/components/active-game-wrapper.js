import React from "react";
import Placeholder from "./placeholder";
import Centering from "./centering";
import Typography from "@material-ui/core/Typography";
import Content from "./content";
import { useActiveGame } from "../../logic/active-game";

const ActiveGameWrapper = (props) => {
    const game = useActiveGame();

    if (game) {
        return props.children;
    } else {
        return (
            <Content>
                <Placeholder factor={2.5}/>
                <Centering>
                    <Typography variant="h5">Es wurde kein aktives Spiel gefunden. Bitte trete erst einem Spiel bei.</Typography>
                </Centering>
            </Content>
        );
    }
};

export default ActiveGameWrapper;