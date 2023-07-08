import React from 'react';
import OnChangeStore from '@src/HOC-library/store-based-hoc/OnChangeStore';

type props = {
  value: string;
  onChange: (value: string) => void;
};

function Title({ onChange, value }: props) {
  return (
    <div>
      <div></div>
    </div>
  );
}

export default OnChangeStore(Title);
