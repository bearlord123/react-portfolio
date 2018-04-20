import React, { Component } from 'react';
import logo from './logo.svg';
import image from './images/cover.jpeg'
import './App.css';
import Skillsets from './components/Skills'
import { Skillset } from './info/Skillset';
import * as ReactBootstrap from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={image} className="Image-cover" alt="logo" />
          <h1 className="App-title">Yu Lei's Online Portfolio</h1>
        </header>
        <ReactBootstrap.Grid>
          <ReactBootstrap.Row className="show-grid">
            <ReactBootstrap.Col xs={6}>
              <Skillsets info={Skillset}/>  
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
        </ReactBootstrap.Grid>
      </div>
    );
  }
}

export default App;
