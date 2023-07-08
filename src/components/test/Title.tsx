import React, { useEffect } from 'react';
import OnChangeStore from '@src/HOC-library/store-based-hoc/OnChangeStore';

type props = {
  value: string;
  onChange: (value: string) => void;
  otherparam: string;
};

function Title({ value, onChange, otherparam }: props) {
  useEffect(() => {
    onChange(2);
  }, []);

  return (
    <div>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

export default OnChangeStore(Title);
