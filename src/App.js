import React, { Component } from 'react';
import './App.scss';

import { Create } from './components/create';
import { FooterButtons } from './components/buttons';
import { Issue } from './components/Issue';


class App extends Component {
  constructor() {
    super()
    this.sate = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }

  handleInput = e => {
    console.log('Hello Input')
  }
  addItem = () => {
    console.log('Hello Add Item')
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row">
            <div className="col-12">
              <h1 className="kamban-title">WELCOME TO KAMBAN</h1>
              <div className="issues-box">
                <div className="row">
                  <div className="col-12">

                    <div className="box-header">
                      <div className="row">
                        <div className="col-6">
                          <Create addItem={this.addItem}></Create>
                        </div>
                        <div className="col-6">

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="box-content col-12">
                    <Issue></Issue>
                  </div>
                </div>
                <div className="row">
                  <div className="box-footer col-12">
                    <FooterButtons></FooterButtons>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
