import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import App from './App';
import IndexTabela from './components/tabelas/index';
import IndexCard from './components/cards/index';
import IndexDados from './components/dados/index';

ReactDOM.render(
  <Router>
    <Switch>

      <Route path="/" exact={true} component={App} />
      <Route path="/tabela" exact={true} component={IndexTabela} />
      <Route path="/card" exact={true} component={IndexCard} />
      <Route path="/data" exact={true} component={IndexDados} />
       

    </Switch>
  </Router>,
  document.getElementById('root')
);


