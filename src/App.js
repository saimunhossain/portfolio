import React from 'react';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
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
            <Route exact path='/portfolio' component={Portfolio}/>
            <Route exact path='/blog' component={Blog}/>
            <Route exact path='/blogdetail' component={BlogDetail}/>
            <Route exact path='/contact' component={Contact}/>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
