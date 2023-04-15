import React, { useState } from 'react';
import UpdatedComponent from './withCounter';

const HoverIncrease = (props) => {
  const { counter, incrementCounter } = props;
  return (
    <div>
      <p>The value of name in HoverIncrease is {props.name}</p>
      <button type='button' onMouseOver={() => incrementCounter()}>
        Increment for HoverIncrease
      </button>
      <p>The value of counter in ClickIncrease/HoverIncrease is {counter}</p>
    </div>
  );
};
export default UpdatedComponent(HoverIncrease, 10);
