import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from '../pages/about/About';
import Nav from '../components/Nav';
import Home from '../pages/home/Home';
import { UserContext, userContextDefaultValue } from '../context/UserContext';

function App() {
  const [value, setValue] = useState('starting value');

  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={userContextDefaultValue}>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
