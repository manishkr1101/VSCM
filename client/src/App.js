
import './App.css';
import React, { Component } from 'react';

import web3 from './services/web3'

import Navbar from './components/Navbar';
import Links from './links';

class App extends Component {
  constructor() {
    super();
    this.state = {
      links: []
    }
    this.init().then(async () => {
      // TODO : remove this line 
      this.setState({links: Links.USER})
    })
    
  }

  async init() {
    await web3.load();
  }

  async getUserRole() {
    // return user,doctor,vaccine_producer,govt_auth
  }
  
  render() {
    return (
      <div className="App">
        <Navbar links={this.state.links}/>
        
      </div>
    );
  }
}

export default App;
