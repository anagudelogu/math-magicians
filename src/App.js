import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Containers/Navbar';
import Calculator from './Containers/Calculator';
import Home from './Containers/Home';
import Quote from './Containers/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div data-testid="container" className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
          <Route
            path="*"
            element={(
              <main style={{ color: 'white', padding: '1rem' }}>
                <p>There is nothing here!</p>
              </main>
            )}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
