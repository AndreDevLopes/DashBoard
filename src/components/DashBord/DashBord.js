import React, { Component } from 'react';
import Menu from '../menu/Menu';
import Bar from '../bar/Bar';

export default class DashBord extends Component {
    render() {
        return (
            <div>
                <div>
                   <Menu />  
                </div>
                <div>
                    <Bar />
                </div>
            </div>
        )
    }
}
