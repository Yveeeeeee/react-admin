
import React from 'react';
import { Route } from "react-router-dom";

import { IndexView } from '../views/common/index';
import { Home } from '../views/home/index';
import { MyFM } from '../views/myFm/index';
import { Vae } from '../views/myFavorite/vae';
import { Jay } from '../views/myFavorite/jay';
import { JJ } from '../views/myFavorite/jj';
import { Setting } from '../views/setting/index';
import { NotFoundPage } from '../views/common/404';

import Login from '../views/login/login';

export const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: "/",
        component: IndexView,
        // exact: true,
        routes: [
            { path: '/home', exact: true, name: 'home', component: Home },
            { path: '/myFM', name: 'myFM', component: MyFM },
            { path: '/myFavorite/vae/:id/:statue', exact: true, name: 'vae', component: Vae },
            { path: '/myFavorite/jay', name: 'jay', component: Jay },
            { path: '/myFavorite/jj', name: 'jj', component: JJ },
            { path: '/setting', name: 'setting', component: Setting },
            {
                path: '/404',
                exact: true,
                name: '404',
                component: NotFoundPage,
            },
        ]
    },

];

export const RouteWithSubRoutes = (route) => {
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={props => {
                return <route.component {...props} routes={route.routes} />
            }}
        />
    )
};