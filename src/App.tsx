import React from 'react';
import logo from './logo.svg';
import './App.css';
import TreeMapScreen from './Screen/TreeMapScreen';

export default class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <TreeMapScreen />
      </div>
    );
  }
}
