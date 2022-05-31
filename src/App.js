import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Containers/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Outlet />
      </div>
    );
  }
}

export default App;
