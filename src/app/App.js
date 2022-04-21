import React, { lazy } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";

import { Home } from "../pages/Home";

const Resume = lazy(() => import("../pages/Resume"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

export const App = () => {
    logCredits();

    return (
        <ThemeProvider>
            <CssBaseline />
            <Router>
                <HelmetMeta />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <React.Suspense fallback={<>...</>}> ̰
                        <Route path="/resume" component={Resume} />
                    </React.Suspense>
                    <React.Suspense fallback={<>...</>}>
                        <Route path="*" component={PageNotFound} />
                    </React.Suspense>
                </Switch>
            </Router>
        </ThemeProvider>
    );
};
