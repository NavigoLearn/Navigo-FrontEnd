import React, { useState } from 'react';
import { changeNodeLevel } from '@typescript/roadmap/roadmap-edit-logic-decorated';
import { LevelTypes, levelTypesArray } from '@type/roadmap/level-types';
import { isLevelType } from '@type/roadmap/typecheckers';

// handles the level change logic for every node
const DropdownLevel = ({ id, level }: { id: string; level: LevelTypes }) => {
  const [selectedOption, setSelectedOption] = useState(level);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    if (!isLevelType(value)) throw new Error('Invalid level type');
    setSelectedOption(value);
    changeNodeLevel(id, value);
  };

  return (
    <select
      className='w-20 block'
      value={selectedOption}
      onChange={handleChange}
    >
      {levelTypesArray.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropdownLevel;
