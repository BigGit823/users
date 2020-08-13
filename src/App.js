import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from "./components/pages/Home";
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './components/pages/NotFound';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
import Gallery from './components/pages/Gallery';
import Team from './components/pages/Team';

function App() {
  return (
  
      <div className="App">
      <Router>
        <Navbar />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/team" component={Team} />
          <Route component={NotFound} />
        </Switch>
      </Router>
        <Footer/>
      </div>
    
  );
}

export default App;
