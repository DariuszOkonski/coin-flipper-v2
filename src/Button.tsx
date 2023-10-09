import React from 'react';

type Props = {
  text: string;
  handleFlipACoin: () => void;
};

const Button = (props: Props) => {
  return (
    <div className='Button'>
      <button onClick={() => props.handleFlipACoin()}>{props.text}</button>
    </div>
  );
};

export default Button;
