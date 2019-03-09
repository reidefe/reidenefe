import React, { Component } from 'react';
import logo from './logo.svg';
import {Menu} from 'semantic-ui-react';
import './App.css';
import TopNav from './components/menu';
import FirstNav from './components/FirstNav';
import SecNav from './components/secnav';
import Banner from './components/banner';
import Homepage from './components/homepage';






class App extends Component {
  render() {
    return (
      
        <div>
          <Homepage/>
          
        </div>
   
    );
  }
}

export default App;
