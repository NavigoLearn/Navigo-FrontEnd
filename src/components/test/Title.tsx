import React from 'react';
import OnChangeStore from '@src/HOC-library/store-based-hoc/OnChangeStore';

type props = {
  value: string;
  onChange: (value: string) => void;
  not2r: string;
};

function Title({ value, onChange, not2r }: props) {
  return <div>{value}</div>;
}

export default OnChangeStore(Title);
