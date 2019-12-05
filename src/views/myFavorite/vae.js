import React, { Component } from 'react';
import { Button } from 'antd';

export class Vae extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleOnclick() {
        console.log( this.props);
        console.log(this.props.match);
    }

    render() {
        return (
            <Button onClick={this.handleOnclick.bind(this)}>我是Vae</Button>
        );
    }
}