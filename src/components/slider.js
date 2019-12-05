import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;


class SliderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
        this.handleSubMenueSelected = this.handleSubMenueSelected.bind(this);
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    handleSubMenueSelected({ key }) {
        // document.title = key;
    }

    renderMenu() {
        const { location: { pathname }, subMenus } = this.props;
        let defaultOpenKeys = pathname && pathname.split('/');
        defaultOpenKeys = defaultOpenKeys && defaultOpenKeys.length ? '/' + defaultOpenKeys[1] : defaultOpenKeys;

        return (
            <Menu theme="dark" defaultOpenKeys={[defaultOpenKeys]} defaultSelectedKeys={[pathname]} mode="inline">
                {
                    subMenus.map(firstMenu => {
                        return (
                            firstMenu.children && firstMenu.children.length ?
                                <SubMenu key={firstMenu.route} title={
                                    <div>
                                        <Icon type={firstMenu.icon} />
                                        <span>{firstMenu.name}</span>
                                    </div>
                                }>
                                    {
                                        firstMenu.children.map(secondMenu => {
                                            return (
                                                <Menu.Item key={secondMenu.route} onClick={this.handleSubMenueSelected} >
                                                    <Link to={secondMenu.route}>
                                                        <Icon type={secondMenu.icon} />
                                                        <span>{secondMenu.name}</span>
                                                    </Link>
                                                </Menu.Item>
                                            );
                                        })
                                    }
                                </SubMenu> :
                                <Menu.Item key={firstMenu.route} onClick={this.handleSubMenueSelected}>
                                    <Link to={firstMenu.route}>
                                        <Icon type={firstMenu.icon} />
                                        <span>{firstMenu.name}</span>
                                    </Link>
                                </Menu.Item>
                        );
                    })
                }
            </Menu>
        );
    }

    render() {
        const { collapsed } = this.state;
        return (
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                {this.renderMenu()}
            </Sider>
        );
    }
}

export const Slider = withRouter(SliderComponent);