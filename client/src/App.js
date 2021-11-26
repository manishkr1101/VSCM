
import './App.css';
import React, { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import web3 from './services/web3'

import Navbar from './components/Navbar';
import Links from './links';

class App extends Component {
  constructor() {
    super();
    this.state = {
      links: Links.USER
    }
    this.init().then(async () => {
      // TODO : remove this line 
      // this.setState({links: Links.DOCTOR})
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
      <BrowserRouter>
        <div className="App">
          <Navbar links={this.state.links}/>

          <Routes>
            {this.state.links.map(link => {
              return <Route key={link.href} path={link.href} element={<link.Component/>}/>
            })}
          </Routes>
          
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
