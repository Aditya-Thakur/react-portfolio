import { Hidden, makeStyles } from "@material-ui/core";
import React from "react";
import DisplacementSphere from "../components/background/DisplacementSphere";
import { SocialIcons } from "../components/content/SocialIcons";
import { FooterText } from "../components/footer/FooterText";
import { LogoLink } from "../components/logo/LogoLink";
import BasicDetails from "../components/resume-content/BasicDetails";
import { SpeedDials } from "../components/speedDial/SpeedDial";
import { ThemeToggle } from "../components/theme/ThemeToggle";


const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
  }));


const Resume = () => {
    const classes = useStyles();

    return (
      <>
        <div className={classes.root}>
          <DisplacementSphere />
          <LogoLink />
          <BasicDetails />
          <ThemeToggle />
          <Hidden smDown>
            <SocialIcons />
          </Hidden>
          <Hidden mdUp>
            <SpeedDials />
          </Hidden>
          <FooterText />
        </div>
      </>
    );
};

export {Resume as default}