import React from 'react';
import Menu from './components/menu/Menu';
import Graf from './components/graficos/Graf';
import "./app.css";




function App() {
  return (
    <div className="container">
    <div className="row ">
      
      <Menu />
      <Graf />

    </div>
     
    </div>
  );
}

export default App;
