import React from 'react';
import Bar from './components/bar/Bar';
import Menu from './components/menu/Menu';
import Footer from './components/footer/footer';
import Graf from './components/graficos/Graf';
import GrafL from './components/graficos/grafL';
import GrafP from './components/graficos/GrafP';
import GrafR from './components/graficos/GrafR';
import "./app.css";




function App() {
  return (
   
     <div>
      <Bar />
      <div className="row container">
        <Menu /> 
        <Graf />
        <GrafL />
        <GrafP />
        <GrafR />
      </div>
      <Footer />

     </div>
   
  );
}

export default App;
