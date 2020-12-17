import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Portofolio from './components/Portofolio';
import { BrowserRouter as Router,
  Switch,
  Route, Link } from 'react-router-dom';

import 'materialize-css';

const menuItems = [
  { 
    link: '/',
    text: 'Home',
  },
  { 
    link: '/contact',
    text: 'Contact',
  },
  { 
    link: '/portofolio',
    text: 'Portofolio',
  }
];

class App extends Component {

  constructor() {
    super();
    this.state = {
        active: 'Home'
    }
    this._handleClick = this._handleClick.bind(this);
  }
  
    _handleClick(menuItem) { 
      this.setState({ active: menuItem });
    }
  render() {
    const activeStyle = { color: '#ff3333' };
  return (
    <Router>
    <div>
      <div className="row">
        <div className="col-md-12">
          <nav>
            <div className="nav-wrapper">
              {menuItems.map(menuItem => 
              <ul id="nav-mobile" class="left hide-on-med-and-down">
              <li className="li-menu"><Link to={menuItem.link} style={this.state.active === menuItem ? activeStyle : {}} 
             onClick={this._handleClick.bind(this, menuItem)}>{menuItem.text}</Link></li>
              </ul>
              )}
            </div>
          </nav>
        </div>
      </div>
      
    </div>
    <Route path="/" exact component={Home} />
    <Route path="/contact" component={Contacts} />
    <Route path="/portofolio" component={Portofolio} />
    </Router>
  );
  }
}   
  

export default App;
