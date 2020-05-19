import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';


export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <ul className="nav flex-column">
                    <li className="nav-item"><Link to="/" className="nav-link dark">Gráficos </Link>  </li>
                    <li className="nav-item"><Link to="/tabela" className="nav-link dark">Tabelas </Link> </li>
                    <li className="nav-item"><Link to="/card" className="nav-link dark">Cards  </Link>  </li>
                </ul>
            </div>
        )
    }
}
