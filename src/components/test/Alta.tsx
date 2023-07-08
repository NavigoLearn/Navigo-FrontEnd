import React from 'react';
import Title from '@components/test/Title';
import { atom } from 'nanostores';

const tempStore = atom({});

function Alta(props) {
  return (
    <div>
      <div>
        <Title store_temporary={tempStore} field={'fe1'} />
      </div>
    </div>
  );
}

export default Alta;
