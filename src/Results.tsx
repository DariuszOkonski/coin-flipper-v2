import React from 'react';

type Props = {
  flips: number;
  heads: number;
  tails: number;
};

const Results = (props: Props) => {
  return (
    <div className='Results'>
      <p>
        Flips: <span>{props.flips}</span>
      </p>
      <p>
        Heads: <span>{props.heads}</span>
      </p>
      <p>
        Tails: <span>{props.tails}</span>
      </p>
    </div>
  );
};

export default Results;
