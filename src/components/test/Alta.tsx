import React from 'react';
import Title from '@components/test/Title';
import { atom } from 'nanostores';

const tempStore = atom({});

function Alta(props) {
  return (
    <div>
      <div>
        <Title
          field={'titleString'}
          store_temporary={tempStore}
          otherparam={'altceva'}
        />
      </div>
    </div>
  );
}

export default Alta;
