import React, { Component } from 'react';
import './App.css';
import Login from './login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>{Login()}</div>
      </div>
    );
  }
}

export default App;



/*import logo from './logo.svg';
import './App.css';
import Login from './login'

function App() {
  return (
    <div className="App">
      <div>
        {Login()}
      </div>
    </div>
  );
}

export default App; */
