import {
  makeStyles,
  useTheme,
  // useMediaQuery,
  // Container,
} from "@material-ui/core";
import { useEffect, useState } from "react";
// import Footer from "./components/Footer";
import { AppHeaderAPT } from "./layouts/AppHeaderAPT";
// import { AppHeader } from "./layouts/AppHeader";
// import { useLocation } from "react-router-dom";
// import wormhole_logo from "./icons/wormhole_logo.svg";
// import wormhole_logo_w from "./icons/wormhole_logo_w.svg";
import WormholeBridge, {
  Theme,
  OPACITY,
  WormholeConnectConfig,
  // light
} from "@wormhole-foundation/wormhole-connect";
import { grey, green, orange, red, pink } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  spacer: {
    flex: 1,
    width: "100vw",
  },
  link: {
    ...theme.typography.body2,
    fontWeight: 600,
    fontFamily: "Suisse BP Intl, sans-serif",
    color: "#181c21",
    marginLeft: theme.spacing(4),
    textUnderlineOffset: "6px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(2.5),
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1),
    },
    "&.active": {
      textDecoration: "underline",
    },
  },
  bg: {
    // background:
    //  "linear-gradient(160deg, rgba(69,74,117,.1) 0%, rgba(138,146,178,.1) 33%, rgba(69,74,117,.1) 66%, rgba(98,104,143,.1) 100%), linear-gradient(45deg, rgba(153,69,255,.1) 0%, rgba(121,98,231,.1) 20%, rgba(0,209,140,.1) 100%)",

    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    position: "relative",
  },
  brandLink: {
    display: "inline-flex",
    alignItems: "center",
    "&:hover": {
      textDecoration: "none",
    },
  },
  iconButton: {
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(2.5),
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(2.5),
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: theme.spacing(1),
    },
  },
  betaBanner: {
    backgroundColor: "rgba(0,0,0,0.75)",
    padding: theme.spacing(1, 0),
  },
  wormholeIcon: {
    height: 32,
    "&:hover": {
      filter: "contrast(1)",
    },
    verticalAlign: "middle",
    marginRight: theme.spacing(1),
    display: "inline-block",
  },
}));

function App() {
  const classes = useStyles();
  // const { pathname } = useLocation();

  const theme = useTheme();
  // const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const bridge_mode = localStorage.getItem("bridge_modetype");
  const [modeName, setModeName] = useState(bridge_mode || theme.palette.type);
  // document.getElementById("bridgebody").className=modeName;

  useEffect(() => {
    document.getElementById("bridgebody")?.classList.add(modeName);
    return () => {
      document.getElementById("bridgebody")?.classList.remove(modeName);
    };
  }, [modeName]);

  const customized: Theme = {
    primary: grey,
    secondary: grey,
    divider: "#ffffff" + OPACITY[20], // color of divider for menus
    background: {
      // background color of the widget, 'wormhole' is an option
      default: "#EDF4FD",
    },
    text: {
      // text colors for across the widget and other minor places
      primary: "black",
      secondary: grey[500],
    },
    error: red, // color of the error divs
    info: pink, // color of the info divs
    success: green, // color of success divs
    warning: orange, // color of warning divs
    button: {
      // colors for all the buttons
      primary: "#191C21" + OPACITY[10], //'#ff5cec', // default button background color
      primaryText: "#191C21" + OPACITY[40], // default button text color
      disabled: "#ffffff", // disabled ... bcolor
      disabledText: "#ffffff" + OPACITY[40], // disabled ... color
      action: "#365140", // ready to be clicked ... color
      actionText: "#ffffff", // ready to be clicked ... color
      hover: "#ffffff" + OPACITY[7], // hovered ... color
    },
    options: {
      // colors for anything that involves choosing from options of things
      hover: "#ffffff" + OPACITY[10], // for hovering over the options under 'Gas payment'
      select: "#365140" + OPACITY[20], // for hovering over any option in a pop-up modal
    },
    card: {
      // colors and float for the bodies under each 'From' and 'To' section
      background: "#ffffff", // background color of the card
      secondary: "#F2F2F2", // background color of the components in the card
      elevation: "0 0 0.25px 0.25px black", // https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
    },
    popover: {
      // colors for the menu when clicking on the wallet button when a wallet is selected
      background: "#ffffff", // background color of the menu
      secondary: "#F2F2F2" + OPACITY[5], // background color for the item being hovered over
      elevation: "0 0 0.25px 0.25px black", // https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow (not being used rn)
    },
    modal: {
      // color of the area that modals do not cover on the screen
      background: "transparent",
    },
    font: {
      // font families across the widget for header and body
      primary: '"Inter custom", sans-serif',
      header: '"Inter custom", sans-serif',
    },
  };

  const config: WormholeConnectConfig = {
    customTheme: customized,
  };

  return (
    <div className={classes.bg}>
      <div className="left-wrap">
        <AppHeaderAPT modeName={modeName} setModeName={setModeName} />
      </div>
      <div className="right-wrap">
        {/* <AppHeader modeName={modeName} setModeName={setModeName} /> */}

        {/* <Container maxWidth="md" style={{ paddingBottom: 24 }}>
          <div
            className="power-by"
            style={{ height: isSmall ? "100px" : "140px" }}
          >
            <span>Powered by</span>
            <img src={modeName == "dark" ? wormhole_logo_w : wormhole_logo} />
          </div> 
        </Container>
         */}
        <div className="aptin-area wormhole-box"> 
            <WormholeBridge config={config} /> 
        </div>

        {/* <div className={classes.spacer} />
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "calc(50% - 220px)",
            minHeight: "100%",
            right: "0",
            background:
              "radial-gradient(ellipse at 100% 40%,#cff5fa,#ebf4fe,transparent)",
            zIndex: "-1",
            pointerEvents: "none",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "calc(50% - 220px)",
            minHeight: "100%",
            background:
              "radial-gradient(ellipse at 10% 90%,#cff5fa,#ebf4fe,transparent)",
            zIndex: "-1",
            pointerEvents: "none",
          }}
        ></div> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
