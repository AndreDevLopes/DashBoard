import React, { Component } from 'react';
import './Bar.css';

export default class Bar extends Component {
    render() {
        return (
            <div >
               <nav className="bar">
                   <form action="" id="form">
                       <input type="text"  className="" />
                       <button type="submit" className="btn but" >Buscar</button>
                   </form>
               </nav>
            </div>
        )
    }
}
