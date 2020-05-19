import React, { Component } from 'react';
import './Bar.css';
import { Link } from 'react-router-dom';

export default class Bar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar bar justify-content-between">
                    <Link to="/" className="navbar-brand " id="menuh3">DashBoard</Link>
                    <form action="" className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
                    <button type="submit" className="btn but">Buscar</button>
                    </form>
                </nav>
            </div>
        )
    }
}
