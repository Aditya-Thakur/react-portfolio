import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
        fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      
      viewBox="-5 -10 220 220"
      className={classes.svgHover}>
     
     <g transform="translate(0.000000,179.000000) scale(0.100000,-0.100000)"
     fill="#000000" stroke="none">
     <path d="M1235 1674 c-197 -27 -270 -44 -410 -99 -49 -20 -108 -48 -130 -63
     -41 -29 -57 -68 -32 -77 7 -3 61 1 118 10 260 40 406 30 467 -31 l34 -34 -5
     -83 c-6 -107 -36 -203 -151 -494 -155 -391 -177 -494 -123 -586 21 -35 40 -52
     84 -74 58 -28 58 -28 263 -28 162 0 223 4 290 19 148 32 250 92 250 147 0 25
     -16 32 -90 40 -50 5 -68 12 -83 30 -32 40 -18 147 57 444 37 142 73 312 82
     377 37 284 -40 421 -271 484 -58 15 -283 27 -350 18z"/>
     <path d="M1100 1351 c-104 -32 -341 -195 -495 -340 -276 -260 -442 -496 -482
     -684 -22 -101 -12 -145 37 -170 30 -16 56 -18 185 -15 130 3 155 6 185 24 33
     19 35 23 32 65 -1 24 -4 94 -5 154 -2 103 0 115 31 192 l33 81 77 7 c111 9
     188 23 259 46 69 23 86 37 81 71 -3 23 -5 23 -160 26 -87 1 -158 5 -158 8 0 9
     86 120 166 214 76 90 174 187 237 235 48 36 63 61 46 81 -12 15 -30 17 -69 5z"/>
     </g>
     </svg>
    );
};
