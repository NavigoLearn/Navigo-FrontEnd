import React, { useState } from 'react';
import UpdatedComponent from './withCounter';

// file name: components/ClickIncrease.js
const ClickIncrease = (props) => {
  const { counter, incrementCounter } = props;

  return (
    <div>
      <p>The value of name in ClickIncrease is {props.name}</p>
      <button type='button' onClick={() => incrementCounter()}>
        Increment for ClickIncrease
      </button>
      <p>The value of counter in ClickIncrease/HoverIncrease is {counter}</p>
    </div>
  );
};
export default UpdatedComponent(ClickIncrease, 3);
