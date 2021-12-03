
import './App.css';
import React, { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import web3 from './services/web3'
import Beneficiary, { ROLE } from './services/contracts/Beneficiary'

import Navbar from './components/Navbar';
import Links from './links';

class App extends Component {
  constructor() {
    super();
    this.state = {
      links: []
    }
    this.init().then(async () => {
      
      const role = await this.getUserRole();
      console.log(role)
      let links = []
      
      if(role === ROLE.DOCTOR) {
        links = Links.DOCTOR;
      }
      else if(role === ROLE.ADMIN) {
        links = Links.ADMIN;
      }
      else if(role === ROLE.PRODUCER) {
        links = Links.PRODUCER;
      }
      else if(role === ROLE.GOVT_AUTHORITY) {
        links = Links.GOVT_AUTHORITY;
      }
      else {
        links = Links.USER;
      }
      this.setState({links: links})
    })
    
  }

  async init() {
    await web3.load();
  }

  async getUserRole() {
    // return user,doctor,vaccine_producer,govt_auth,admin
    return Beneficiary.getRole();
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
