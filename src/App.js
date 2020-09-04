import React, { Component } from 'react';
import './App.css';
import PersonCard from './components/PersonCard';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [],
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PersonCard
            lastName="Doe"
            firstName="Jane"
            age={45}
            hairColor="Black"
          />
          <PersonCard
            lastName="Smith"
            firstName="John"
            age={88}
            hairColor="Brown"
          />
          <PersonCard
            lastName="Fillmore"
            firstName="Millard"
            age={50}
            hairColor="Brown"
          />
          <PersonCard
            lastName="Smith"
            firstName="Maria"
            age={62}
            hairColor="Brown"
          />
        </header>
      </div>
    )
  }
}


export default App;
