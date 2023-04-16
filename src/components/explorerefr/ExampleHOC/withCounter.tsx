import React, { useState } from 'react';

const UpdatedComponent = (OriginalComponenet, increaseCounter) => {
  const NewComponenet = (props) => {
    const [counter, setCounter] = useState(0);
    return (
      <OriginalComponenet
        name='LogRocket'
        counter={counter}
        incrementCounter={() => setCounter((prev) => prev + increaseCounter)}
         //Asta reuseste sa ia propurile date in componenete separat: e.g. <HoverIncrease word={pinapple}/> si pe urma e accesibil in ...props this is how you pass down props
        {...props}
    );
  };
  return NewComponenet;
};

export default UpdatedComponent;
