import React from 'react';
import Bar from './components/bar/Bar';
import Menu from './components/menu/Menu';
import Footer from './components/footer/footer';
import Graf from './components/graficos/Graf';

import "./app.css";




function App() {
  return (
   
     <div>
      <Bar />
      <div className="row container">
        <Menu /> 
        <Graf />
      </div>
      <Footer />

     </div>
   
  );
}

export default App;
