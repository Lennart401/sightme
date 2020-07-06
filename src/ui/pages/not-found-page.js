import React from "react";
import Typography from "@material-ui/core/Typography";
import Content from "../components/content";
import Centering from "../components/centering";

const NotFoundPage = () => {
    return (
        <Content>
            <Centering>
                <Typography variant="body1">Seite nicht gefunden :/</Typography>
            </Centering>
        </Content>
    );
};

export default NotFoundPage;