import React from 'react';

type Props = {
  text: string;
};

const Header = (props: Props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};

export default Header;
