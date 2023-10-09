import { CoinSide } from './App';
import head from './image/head.jpg';
import tail from './image/tail.jpg';

type Props = {
  coin: CoinSide;
};

const Coin = (props: Props) => {
  return (
    <div className='Coin'>
      <img src={props.coin === CoinSide.Head ? head : tail} alt={head} />;
    </div>
  );
};

export default Coin;
