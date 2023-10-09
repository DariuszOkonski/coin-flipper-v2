import React, { Component } from 'react';
import Header from './Header';
import Coin from './Coin';
import Button from './Button';
import Results from './Results';

export enum CoinSide {
  Head = 'head',
  Tail = 'tail',
}

type Props = {};

type State = {
  flips: number;
  heads: number;
  tails: number;
  coinSide: CoinSide;
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      flips: 0,
      heads: 0,
      tails: 0,
      coinSide: CoinSide.Head,
    };

    this.handleFlipACoin = this.handleFlipACoin.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleFlipACoin() {
    const coin: CoinSide = Math.random() > 0.5 ? CoinSide.Head : CoinSide.Tail;
    const headFlip = coin === CoinSide.Head ? 1 : 0;
    const tailFlip = coin === CoinSide.Tail ? 1 : 0;

    this.setState({
      flips: this.state.flips + 1,
      heads: this.state.heads + headFlip,
      tails: this.state.tails + tailFlip,
      coinSide: coin,
    });
  }

  handleClear() {
    this.setState({
      flips: 0,
      heads: 0,
      tails: 0,
      coinSide: CoinSide.Head,
    });
  }

  render() {
    return (
      <div className='App'>
        <Header text="Let's Flip A Coin!" />
        <Coin coin={this.state.coinSide} />
        <Button text='Flip Me!' handleFlipACoin={this.handleFlipACoin} />
        <Button text='Clear!' handleFlipACoin={this.handleClear} />
        <Results
          flips={this.state.flips}
          heads={this.state.heads}
          tails={this.state.tails}
        />
      </div>
    );
  }
}

export default App;
