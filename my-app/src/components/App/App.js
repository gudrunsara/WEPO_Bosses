// The starting point of the run:

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch }from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import Bosses from '../Bosses/Bosses';

class App extends Component {
  render() {
    return (

      <div>
        <NavBar/>
          <div className="container">
           <Router>
            <Switch>
              <Route exact path="/" component={ About } />
              <Route exact path="/bosses" component={ Bosses } />
              <Route path='*' render={() => <div> 404 Not found </div>} />
            </Switch> 
            </Router>        
          </div>
        </div>

    );
  }
}

export default App;
