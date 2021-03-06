import React from 'react';
import './App.css';
import { useRoutes } from "hookrouter";
import IndexPage from "./ui/pages/index-page";
import HostPage from "./ui/pages/host-page";
import JoinPage from "./ui/pages/join-page";
import PlayPage from "./ui/pages/play-page";
import NotFoundPage from "./ui/pages/not-found-page";
import { createMuiTheme } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import { ThemeProvider } from "@material-ui/styles";
import green from "@material-ui/core/colors/green";
import StateSnackbar from "./ui/components/state-snackbar";
import SharePage from "./ui/pages/share-page";
import AboutPage from "./ui/pages/about-page";
import EnterNamePage from "./ui/pages/enter-name-page";
import GameOptionsPage from "./ui/pages/game-options-page";
import ConfirmPositionPage from "./ui/pages/confirm-position-page";

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: green,
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: "5em",
            },
            label: {
                paddingLeft: "1em",
                paddingRight: "1em",
                paddingTop: "0.3em",
                paddingBottom: "0.3em"
            }
        },
        MuiIconButton: {
            root: {
                color: "#000"
            }
        },
        MuiOutlinedInput: {
            root: {
                borderRadius: "5em"
            },
            input: {
                padding: "16px 24px"
            }
        },
        MuiDialogActions: {
            root: {
                flexDirection: "column",
                "& > :not(:first-child)" : {
                    marginTop: "6px"
                }
            }
        },
        MuiSnackbarContent: {
            root: {
                flexWrap: "nowrap"
            }
        },
        MuiSwitch: {
            root: {
                width: "48px"
            },
            switchBase: {
                "&$checked": {
                    transform: "translateX(10px)"
                }
            }
        },
    },
    props: {
        MuiButton: {
            color: "secondary",
            variant: "contained"
        },
        MuiTextField: {
            variant: "outlined",
            fullWidth: true,
        },
        MuiDialogActions: {
            disableSpacing: true
        }
    }
});

const routes = {
    "/": () => <IndexPage/>,
    "/host": () => <HostPage/>,
    "/host/enter-name": () => <EnterNamePage/>,
    "/host/game-options": () => <GameOptionsPage/>,
    "/share": () => <SharePage/>,
    "/join/:game": ({game}) => <JoinPage gameBase64={game}/>,
    "/join/:game/confirm-position": ({game}) => <ConfirmPositionPage gameBase64={game}/>,
    "/play": () => <PlayPage/>,
    "/about": () => <AboutPage/>
};

const App = () => {
    const routeResult = useRoutes(routes);

    return (
        <ThemeProvider theme={theme}>
            <StateSnackbar stateName="global" useAlert={false}/>
            {routeResult || <NotFoundPage/>}
        </ThemeProvider>
    );
};

export default App;
