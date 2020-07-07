import React, { Fragment } from "react";
import { useLink } from "../../logic/hosting";
import BackBar from "../components/back-bar";
import Content from "../components/content";
import QuarterPageHeader from "../components/quarter-page-header";
import Typography from "@material-ui/core/Typography";
import Centering from "../components/centering";
import Caption from "../components/caption";
import SectionTitle from "../components/section-title";
import { makeStyles } from "@material-ui/core/styles";
import Placeholder from "../components/placeholder";
import LinkedLink from "../components/linked-link";
import { ShareRounded } from "@material-ui/icons";
import { setMessage } from "../../logic/messages";
import Button from "@material-ui/core/Button";
import { useTitle } from "hookrouter";

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    link: {
        overflowWrap: "anywhere",
        wordBreak: "break-all",
        flexGrow: 1
    },
    shareIconBox: {
        margin: "0px 16px"
    }
}));

const SharePage = () => {
    useTitle("Link zum Spiel teilen | SightMe");
    const classes = useStyles();
    const link = useLink();

    // Share button handler
    const handleClickShare = () => {
        if (navigator.share) {
            navigator.share({
                url: link
            });
        } else {
            setMessage("Dein Browser unterstützt das Teilen von Links nicht. Bitte kopiere den Link und verschicke ihn manuell.");
        }
    };

    return (
        <Fragment>
            <BackBar href={"/"}/>
            <Content>
                {link && (
                    <Fragment>
                        <QuarterPageHeader>
                            <Typography variant="h4" component="h1">Spiel erstellt!</Typography>
                        </QuarterPageHeader>
                        <Centering>
                            <Caption>Das Spiel ist jetzt für 24 Stunden gültig. Teile den Link, damit deine Freunde deinem Spiel beitreten können.</Caption>
                        </Centering>

                        <Placeholder factor={2}/>

                        <SectionTitle standard="Link zum Teilen"/>
                        <LinkedLink href={link} color="inherit" className={classes.link}>{link}</LinkedLink>

                        <Placeholder/>

                        <Centering>
                            <Button onClick={handleClickShare}><ShareRounded style={{marginLeft: "-6px", marginRight: "16px"}}/>Teilen</Button>
                        </Centering>
                    </Fragment>
                )}
                {!link && (
                    <QuarterPageHeader>
                        <Typography variant="h4" component="h1">Bitte erstelle zuerst ein Spiel.</Typography>
                    </QuarterPageHeader>
                )}
            </Content>
        </Fragment>
    );
};

export default SharePage;