import React, { useState, useEffect } from 'react';
import { some, find, cloneDeep } from 'lodash';
import { Breadcrumb as AntBreadcrumb } from 'antd';

const AntBreadcrumbItem = AntBreadcrumb.Item;

export function Breadcrumb(props) {
    const { location, subMenus } = props;

    const findPath = (path) => {
        if (!path) {
            return;
        }
        let paths = path.split('/');
        paths = paths.filter(item => item);
        let currentCrumbs = [];

        function findName(subMenus, paths) {
            if (!paths.length) {
                return;
            }
            let newPaths = cloneDeep(paths);

            let nextSubMnue = {};
            if (some(subMenus, { id: newPaths[0] })) {
                nextSubMnue = find(subMenus, { id: newPaths[0] });
                currentCrumbs.push({
                    id: nextSubMnue.id,
                    name: nextSubMnue.name,
                    route: nextSubMnue.route
                });
            }

            if (nextSubMnue.children && nextSubMnue.children.length) {
                newPaths.shift();
                findName(nextSubMnue.children, newPaths);
            }

            return currentCrumbs;
        }

        return findName(subMenus, paths);
    };
    let currentBreadcrumbItems = findPath(location.pathname) || [];

    const [breadcrumbItems, setBreadcrumbItems] = useState([]);

    useEffect(() => {
        setBreadcrumbItems(currentBreadcrumbItems);
        // eslint-disable-next-line
    }, [location.pathname]);

    const breadcrumbProps = {
        style: {
            margin: '16px 20px'
        }
    };

    return (
        <AntBreadcrumb {...breadcrumbProps}>
            {
                breadcrumbItems.map(item => {
                    return <AntBreadcrumbItem key={item.id} >{item.name}</AntBreadcrumbItem>;
                })
            }
        </AntBreadcrumb>
    );
}