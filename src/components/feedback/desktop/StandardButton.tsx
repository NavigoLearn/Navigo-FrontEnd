import React from 'react';

const StandardButton = ({
  setFormType,
  formType,
  currentForm,
}: {
  formType: string;
  setFormType: () => void;
  currentForm: boolean;
}) => {
  return (
    <button
      type='button'
      className={`font-roboto text-md md:text-xl px-4 py-2 font-normal  rounded-md  transition-all ${
        currentForm ? 'bg-primary text-white' : 'bg-transparent'
      } `}
      onClick={() => setFormType()}
    >
      {formType}
    </button>
  );
};

export default StandardButton;
