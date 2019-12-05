import React from 'react';
import { Layout } from 'antd';
const { Footer: AntFooter } = Layout;

export function Footer() {
    const footerProps = {
        style: {
            textAlign: 'center',
        },
    };
    
    return (
        <AntFooter {...footerProps}>testDemo ©2019 Created by Yve</AntFooter>
    );
}