
import React from 'react';
import { Layout } from 'antd';
import { Switch, Redirect } from "react-router-dom";

import { Slider } from '../../components/slider';
import { Header } from '../../components/header';
import { Breadcrumb } from '../../components/breadcrumb';
import { Footer } from '../../components/footer';
import { RouteWithSubRoutes } from '../../router/index'

const { Content } = Layout;

export function IndexView(props) {
    const { routes } = props;
    const contentProps = {
        style: {
            margin: '0 16px',
            padding: 24,
            background: '#fff',
            minHeight: 360
        }
    }

    const subMenus = [
        {
            id: 'home',
            name: '首页',
            route: '/home',
            icon: 'home',
            children: [],
        },
        {
            id: 'myFM',
            name: '私人FM',
            route: '/myFM',
            icon: 'paper-clip',
            children: [],
        },
        {
            id: 'myFavorite',
            name: '我的收藏',
            route: '/myFavorite',
            icon: 'heart',
            children: [
                {
                    id: 'vae',
                    name: '许嵩',
                    route: '/myFavorite/vae/2/ok',
                    icon: 'customer-service',
                },
                {
                    id: 'jay',
                    name: '周杰伦',
                    route: '/myFavorite/jay',
                    icon: 'video-camera',
                },
                {
                    id: 'jj',
                    name: '林俊杰',
                    route: '/myFavorite/jj',
                    icon: 'cloud-server',
                },
            ],
        },
        {
            id: 'setting',
            name: '设置',
            route: '/setting',
            icon: 'setting',
            children: [],
        },
        {
            id: 'login',
            name: '登录',
            route: '/login',
            icon: 'user',
            children: [],
        },
    ];

    return (
        <Layout style={{ minHeight: '100vh' }} >
            <Slider {...props} subMenus={subMenus} />
            <Layout>
                <Header />
                <Breadcrumb {...props} subMenus={subMenus} />
                <Content {...contentProps}>
                    <Switch>
                        {routes.map(route => {
                            return <RouteWithSubRoutes key={route.name} {...route} />
                        })}
                        <Redirect exact from="/" to="/home" />
                        <Redirect to="/404" />
                    </Switch>
                </Content>
                <Footer />
            </Layout>
        </Layout>
    );
}