
import './App.css';
import React, { Component } from 'react';

import web3 from './services/web3'

import Navbar from './components/Navbar';
import Beneficiary from './services/contracts/Beneficiary';

class App extends Component {
  constructor() {
    super();
    this.init().then(async () => {
      // TODO : remove this line 
      const count = await Beneficiary.getRegisteredCount();
      console.log(count)
    })
    
  }

  async init() {
    await web3.load();
  }
  
  render() {
    return (
      <div className="App">
        <Navbar/>
        
      </div>
    );
  }
}

export default App;
