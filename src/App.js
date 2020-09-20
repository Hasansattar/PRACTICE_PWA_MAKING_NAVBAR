import React from 'react';
 
import './App.css';
import { Navbar, Nav } from 'react-bootstrap'
import Home from './Home'
import About from './About'
import Users from './Users'
import {NavLink} from 'react-router-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand to="/home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/users">users</NavLink>
            
             
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/about" component={About} ></Route>
          <Route path="/users" component={Users} ></Route>
          <Route path="/home" component={Home} ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
