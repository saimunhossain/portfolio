import React from 'react';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/service' component={Service}/>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
