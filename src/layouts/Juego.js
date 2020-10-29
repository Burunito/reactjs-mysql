import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import routes from "routes.js";
import bgImage from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
// @material-ui/icons
import Phone from "@material-ui/icons/Phone";
import Chat from "@material-ui/icons/Chat";
import Block from "@material-ui/icons/Block";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/LandingPage/Grid/GridContainer.js";
import GridItem from "components/LandingPage/Grid/GridItem.js";
import Button from "components/LandingPage/CustomButtons/Button.js";
import CustomInput from "components/LandingPage/CustomInput/CustomInput.js";
import CustomLinearProgress from "components/LandingPage/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "components/LandingPage/Pagination/Pagination.js";
import Badge from "components/LandingPage/Badge/Badge.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

let ps;

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/juego") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/juego" to="/juego/dashboard" />
  </Switch>
);

const useStyles = makeStyles(styles);

export default function Juego({ ...rest }) {
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  const [image, setImage] = React.useState(bgImage);
  const [color, setColor] = React.useState("blue");
  const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleImageClick = image => {
    setImage(image);
  };
  const handleColorClick = color => {
    setColor(color);
  };
  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/juego/maps";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);
  return (
    <div className={classes.wrapper}>
      <div className={classes.mainPanel} ref={mainPanel}>
          <GridContainer justify="center">
            <GridItem xs={6} sm={6} md={4}>
              <Button color="primary" round>
                <Block className={classes.icons} /> 50 : 50
              </Button>
              <Button color="primary" round>
                <Phone className={classes.icons} /> Llamada
              </Button>
              <Button color="primary" round>
                <Chat className={classes.icons} /> El chat
              </Button>
            </GridItem>
          </GridContainer>
          <GridContainer 
            direction="column"
            justify="flex-start"
            alignItems="flex-end"
            >
            <GridItem  xs={1} sm={1} md={1} >
            Premio
            </GridItem>
            <GridItem xs={1} sm={1} md={1}>
            9
            </GridItem>
            <GridItem xs={1} sm={1} md={1}>
            8
            </GridItem>
            <GridItem xs={1} sm={1} md={1}>
            7
            </GridItem>
            <GridItem xs={1} sm={1} md={1}>
            6
            </GridItem>
            <GridItem xs={1} sm={1} md={1}>
            Premio
            </GridItem>
            <GridItem xs={1} sm={1} md={1}>
            5
            </GridItem>
            <GridItem xs={1} sm={1} md={1}>
            4
            </GridItem>
            <GridItem xs={1} sm={1} md={1} >
            3
            </GridItem>
            <GridItem xs={1} sm={1} md={1}>
            2
            </GridItem>
            <GridItem xs={1} sm={1} md={1}>
            1
            </GridItem>
          </GridContainer>
          <GridContainer 
            justify="center"
            >
            <GridItem  xs={1} sm={1} md={1} >
            <Button color="primary" round>Pregunta</Button>
            </GridItem>
          </GridContainer>
          <GridContainer 
            justify="center"
            >
            <GridItem  xs={5} sm={5} md={5} >
             <Button color="primary" round>A</Button>
            </GridItem>
            <GridItem  xs={5} sm={5} md={5} >
             <Button color="primary" round>B</Button>
            </GridItem>
          </GridContainer>
          <GridContainer 
            justify="center"
            >
            <GridItem  xs={5} sm={5} md={5} >
              <Button color="primary" round>C</Button>
            </GridItem>
            <GridItem  xs={5} sm={5} md={5} >
              <Button color="primary" round>D</Button>
            </GridItem>
          </GridContainer>
      </div>
    </div>
  );
}
