import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';


export default class Menu extends Component {
    render() {
        return (
            
            <div className="menu">
                <div> <h3 id="menuh3">DashBoard</h3> </div>
                <ul className="nav flex-column dark">

                   <div className="link"><li className="nav-item"><Link to="/"  id="menuli">Gráficos </Link>  </li> </div> 
                   <div className="link"><li className="nav-item"><Link to="/tabela" id="menuli">Tabelas </Link> </li> </div> 
                   <div className="link"><li className="nav-item"><Link to="/card" id="menuli">Cards  </Link>  </li> </div> 
                </ul>
            </div>
        )
    }
}
