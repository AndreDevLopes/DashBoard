import React, { Component } from 'react'
import Bar from '../bar/Bar';
import Menu from '../menu/Menu';
import Footer from '../footer/footer';

export default class indexTabela extends Component {
    render() {
        return (
            <div>
                <Bar />
                <Menu />
                <Footer />
            </div>
        )
    }
}
