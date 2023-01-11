import {
  CHAIN_ID_BSC,
  CHAIN_ID_ETH,
  CHAIN_ID_SOLANA,
} from "@certusone/wormhole-sdk";
import { 
  Container, 
  makeStyles,
  Tab,
  Tabs, 
  useTheme,
  useMediaQuery,
} from "@material-ui/core"; 
import { useCallback, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { 
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Attest from "./components/Attest";
import Footer from "./components/Footer";
import Migration from "./components/Migration";
import EvmQuickMigrate from "./components/Migration/EvmQuickMigrate";
import SolanaQuickMigrate from "./components/Migration/SolanaQuickMigrate";
import NFT from "./components/NFT";
import NFTOriginVerifier from "./components/NFTOriginVerifier";
import Recovery from "./components/Recovery";
import Stats from "./components/Stats";
import CustodyAddresses from "./components/Stats/CustodyAddresses";
import TokenOriginVerifier from "./components/TokenOriginVerifier";
import Transfer from "./components/Transfer";
import UnwrapNative from "./components/UnwrapNative";
import WithdrawTokensTerra from "./components/WithdrawTokensTerra";
import { useBetaContext } from "./contexts/BetaContext"; 
import wormhole_logo from "./icons/wormhole_logo.svg";
import wormhole_logo_w from "./icons/wormhole_logo_w.svg";
import { AppHeaderAPT } from "./layouts/AppHeaderAPT";
import { AppHeader } from "./layouts/AppHeader";

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
  gradientRight: {
    position: "absolute",
    top: 0,
    width: 'calc(50% - 220px)',
    'min-height': '100%',
    right: '0',
    background: 'radial-gradient(ellipse at 100% 40%,#cff5fa,#ebf4fe,transparent)',
    // top: "72px",
    // right: "-1000px",
    // width: "1757px",
    // height: "1506px",
    // background:
    //   "radial-gradient(closest-side at 50% 50%, #cff5fa 0%, #FFCE0000 100%)",
    // opacity: "0.2",
    // transform: "matrix(0.87, 0.48, -0.48, 0.87, 0, 0)",
    zIndex: "-1",
    pointerEvent: "none",
    // [theme.breakpoints.down("sm")]: {
    //   display: "none",
    // },
  },
  gradientLeft: {
    position: "absolute",
    top: '0',
    left: '0',
    width: 'calc(50% - 220px)',
    'min-height': '100%',
    background: 'radial-gradient(ellipse at 10% 90%,#cff5fa,#ebf4fe,transparent)',

    // top: "-530px",
    // left: "-350px",
    // width: "1379px",
    // height: "1378px",

    // background:
    //   "radial-gradient(closest-side at 50% 50%, #cff5fa 0%, #F44B1B00 100%)",
    // opacity: "0.2",
    zIndex: "-1",
    pointerEvent: "none",
  },

}));

function App() {
  const classes = useStyles(); 
  const { push } = useHistory();
  const { pathname } = useLocation();
  const handleTabChange = useCallback(
    (event, value) => {
      push(value);
    },
    [push]
  );

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const bridge_mode = localStorage.getItem('bridge_modetype'); 
  const [modeName, setModeName] = useState(bridge_mode?bridge_mode:theme.palette.type); 
  document.getElementById("bridgebody").className=modeName; 

  return (
  
      <div className={classes.bg}>
        <div className="left-wrap">
          <AppHeaderAPT modeName={modeName} setModeName={setModeName} />
        </div>
        <div className="right-wrap">

          <AppHeader modeName={modeName} setModeName={setModeName} /> 
         
          {["/transfer", "/nft", "/redeem"].includes(pathname) ? (
            <Container maxWidth="md" style={{ paddingBottom: 24 }}>

              <div className="power-by" style={{ 'height': isSmall ? '100px' : '140px' }}>
                <span>Powered by</span>
                <img src={modeName=="dark"?wormhole_logo_w:wormhole_logo} />
              </div>
              <Tabs className="aptin-menu"
                value={pathname}
                variant="fullWidth"
                onChange={handleTabChange}
                indicatorColor="primary"
              >
                <Tab className="menu-item" label="Tokens" value="/transfer" /> 
                <Tab className="menu-item" label="Redeem" value="/redeem" to="/redeem" />
              </Tabs>
            </Container>
          ) : null}

          <div className='aptin-area'>

            <Switch>
              <Route exact path="/transfer">
                <Transfer />
              </Route>
              <Route exact path="/nft">
                <NFT />
              </Route>
              <Route exact path="/redeem">
                <Recovery />
              </Route>
              <Route exact path="/nft-origin-verifier">
                <NFTOriginVerifier />
              </Route>
              <Route exact path="/token-origin-verifier">
                <TokenOriginVerifier />
              </Route>
              <Route exact path="/register">
                <Attest />
              </Route>
              <Route exact path="/migrate/Solana/:legacyAsset/:fromTokenAccount">
                <Migration chainId={CHAIN_ID_SOLANA} />
              </Route>
              <Route exact path="/migrate/Ethereum/:legacyAsset/">
                <Migration chainId={CHAIN_ID_ETH} />
              </Route>
              <Route exact path="/migrate/BinanceSmartChain/:legacyAsset/">
                <Migration chainId={CHAIN_ID_BSC} />
              </Route>
              <Route exact path="/migrate/Ethereum/">
                <EvmQuickMigrate chainId={CHAIN_ID_ETH} />
              </Route>
              <Route exact path="/migrate/BinanceSmartChain/">
                <EvmQuickMigrate chainId={CHAIN_ID_BSC} />
              </Route>
              <Route exact path="/migrate/Solana/">
                <SolanaQuickMigrate />
              </Route>
              <Route exact path="/stats">
                <Stats />
              </Route>
              <Route exact path="/withdraw-tokens-terra">
                <WithdrawTokensTerra />
              </Route>
              <Route exact path="/unwrap-native">
                <UnwrapNative />
              </Route>
              <Route exact path="/custody-addresses">
                <CustodyAddresses />
              </Route>
              <Route>
                <Redirect to="/transfer" />
              </Route>
            </Switch>
          </div>

          <div className={classes.spacer} />
          <div className={classes.gradientRight}></div> 
          <div className={classes.gradientLeft}></div> 
          <Footer />
        </div>

      </div>
  
  );
}

export default App;
