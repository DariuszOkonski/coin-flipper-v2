import { Component } from 'react';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header text="Let's Flip A Coin!" />
      </div>
    );
  }
}

export default App;
