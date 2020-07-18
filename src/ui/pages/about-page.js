import React from "react";
import BackBar from "../components/back-bar";
import Content from "../components/content";
import PageTitle from "../components/page-title";
import FullHeightWrapper from "../components/full-height-wrapper";
import FullHeightContent from "../components/full-height-content";
import Typography from "@material-ui/core/Typography";
import Centering from "../components/centering";
import { makeStyles } from "@material-ui/core/styles";
import SectionTitle from "../components/section-title";
import Placeholder from "../components/placeholder";
import { CodeRounded } from "@material-ui/icons";
import { version } from "../../version";
import Link from "@material-ui/core/Link";
import { useTitle } from "hookrouter";

const useStyles = makeStyles(() => ({
    bottom: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "16px",
    },
    link: {
        verticalAlign: "top"
    }
}));

const AboutPage = () => {
    useTitle("Über | SightMe");
    const classes = useStyles();

    return (
        <FullHeightWrapper>
            <BackBar href={"/"}/>
            <FullHeightContent>
                <PageTitle standard="Über " colored="SightMe"/>
                <Typography variant="body1">
                    SightMe ist durch die Idee eines Freundes entstanden. Sein Vater und ein paar Freunde von ihm haben
                    früher ein Spiel gespielt, bei dem sich einer in der Stadt mit seinem Auto "versteckt".
                    Derjenige hat dann sein CB-Funkgerät angeschaltet und die anderen mussten ihn dann Anhand der
                    Signalstärke von ihm finden. Aus dem Spiel wurde die Idee für eine App, und später dann diese App.
                </Typography>

                <Placeholder/>
                <SectionTitle standard="Funktionsweise"/>
                <Typography variant="body1">
                    Wenn der Spielleiter ein Spiel erstellt, werden alle benötigten Spieldaten in einem Link mittels
                    Base64 zusammengefasst. Wenn die anderen Teilnehmer diesen Link öffnen, wird anhand der Distanz zum
                    Ziel das blinken des Kreises berechnet.
                </Typography>

                <Placeholder/>
                <SectionTitle standard="Links"/>
                <Typography variant="body1"><CodeRounded/> <Link href="https://github.com/Lennart401/sightme" target="_blank" className={classes.link}>github.com/Lennart401/sightme</Link></Typography>

                <Placeholder/>
            </FullHeightContent>

            <Content>
                <Centering className={classes.bottom}>
                    <Typography variant="body2">Version {version}</Typography>
                    <Typography variant="body2">&copy; 2020 Lennart Popkes</Typography>
                </Centering>
            </Content>
        </FullHeightWrapper>
    );
};

export default AboutPage;