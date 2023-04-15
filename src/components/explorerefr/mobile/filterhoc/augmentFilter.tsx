import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import { dataSave } from '@store/explorefilter';

const AugmentFilter = (OriginalComponent, field) => {
  const newFilter = (props) => {
    const [listItem, setListItem] = useState({
      SomeField1: 'none',
      SomeField2: 'none',
      SomeField3: 'none',
    });
    const [isOpen, setIsOpen] = useState('');
    return (
      <OriginalComponent
        onChange={(fieldDropDown, option) =>
          setListItem((prev) => ({ ...prev, [fieldDropDown]: option }))
        }
        onSave={() => {
          dataSave(field, listItem);
        }}
        // onCancel={}
        value={listItem}
        {...props}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    );
  };

  return newFilter;
};

export default AugmentFilter;
