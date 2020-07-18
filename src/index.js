import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import {
  Tabs1,
  Tabs2
} from './components/Tabs';
import About from './pages/About';
import Policy from './pages/Policy';
import './hello.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <main>
      <Header />
      <h1 className="header">Hello World!</h1>
      <Router>
          <div>
            <Tabs1 />
            <Tabs2 />
            <Route path='/About' component={About}/>
            <Route path='/Policy' component={Policy}/>
          </div>
        </Router>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();