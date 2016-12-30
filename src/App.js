import React, {Component} from 'react';
import logo from './logo.svg';
import TestButton from './TestButton'
import TestButton2 from './TestButton2'
import Get from './Get'
import './App.css';

class App extends Component {
  render() {
    return <div>
      <Get route="/hourlytweets">
        <TestButton/>
      </Get>

      <TestButton2/>
    </div>
  }
}

export default App;
