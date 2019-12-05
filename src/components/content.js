import React, { cloneElement } from 'react';

import { Layout } from 'antd';
const { Content: AntContent } = Layout;


export function Content(props) {
    console.log(props);
    const contentProps = {
        style: {
            margin: '0 16px',
        }
    }
    return (
        <AntContent {...contentProps}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                {props.children ? cloneElement(props.children) : null}
            </div>
        </AntContent>
    );
}