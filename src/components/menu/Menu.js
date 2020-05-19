import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Menu extends Component {
    render() {
        return (
            <div>
                <ul className="nav flex-column">
                    <li className="nav-item"><Link to="/">Gráficos </Link>  </li>
                    <li className="nav-item"><Link to="/tabela">Tabelas </Link> </li>
                    <li className="nav-item"><Link to="/card">Cards  </Link>  </li>
                </ul>
            </div>
        )
    }
}
