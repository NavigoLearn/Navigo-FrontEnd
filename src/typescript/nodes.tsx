import React from 'react';
import CustomContent from '@components/TestComp';

type MainNodeProps = {
  x: number;
  y: number;
  onClick: () => void;
};
const MainNode = ({ x, y, onClick }: MainNodeProps) => {
  return (
    <g transform={`translate(${x}, ${y})`} onClick={onClick}>
      <foreignObject x='0' y='0' width='100' height='100'>
        <div>
          <CustomContent />
        </div>
      </foreignObject>
    </g>
  );
};

export default MainNode;
