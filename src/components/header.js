import React from 'react';
import { Layout } from 'antd';
const { Header: AntHeader } = Layout;

export function Header() {
    const headersProps = {
        style: {
            background: '#999',
        }
    }
    return <AntHeader {...headersProps} />;
}