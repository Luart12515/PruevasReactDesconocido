import React, { Component } from 'react';
import './styles/App.css';
import Navigation from './components/navigation'


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navigation/>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <br/>
              <h1 className="letterTitle letterLogo App">Tecnologias Aprendidas y usadas</h1>
            </div>
            <div className="col-sm-12">
            
            </div>    
          </div>
        </div>
      </div>
    );
  }

}

export default App;

