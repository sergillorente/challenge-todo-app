import React, { Component } from 'react';
import './App.css';
import ToDoCard from './components/ToDoCard/ToDoCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoCard />
      </div>
    );
  }
}

export default App;
