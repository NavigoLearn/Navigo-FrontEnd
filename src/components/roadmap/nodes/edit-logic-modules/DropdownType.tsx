import React, { useState } from 'react';
import { changeNodeType } from '@store/roadmap_edit';
import {
  NodeIdentifierTypes,
  nodeIdentifierTypesArray,
} from '@type/roadmap/nodes';
import { isValidNodeType } from '@type/roadmap/typecheckers';

// handles all the node type change logic for every node
const DropdownType = ({
  id,
  type,
}: {
  id: string;
  type: NodeIdentifierTypes;
}) => {
  const [selectedOption, setSelectedOption] = useState(type);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    if (isValidNodeType(value)) {
      setSelectedOption(value);
      changeNodeType(id, value);
    }
  };

  return (
    <select
      className='absolute w-20'
      value={selectedOption}
      onChange={handleChange}
    >
      {nodeIdentifierTypesArray.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropdownType;
