import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { routes, RouteWithSubRoutes } from './index';

function RouterMaps(props) {
    return (
        <Router>
            <Switch>
                {routes.map(route => (
                    <RouteWithSubRoutes key={route.path} {...route} />
                ))}
            </Switch>
        </Router>
    );
}

export default RouterMaps;