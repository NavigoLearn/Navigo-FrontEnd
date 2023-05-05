import React, { useState, useEffect } from 'react';

type FormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  description: string;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  placeholderTitle: string;
  placeholderDescription: string;
};

export default (WrappedComponent: React.FC<FormProps>) => {
  const hocComponent = ({
    handleSubmit,
    placeholderTitle,
    placeholderDescription,
  }: {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    placeholderTitle: string;
    placeholderDescription: string;
  }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
      setTitle('');
      setDescription('');
    }, [placeholderTitle, placeholderDescription]);

    return (
      <WrappedComponent
        title={title}
        description={description}
        setTitle={(value) => setTitle(value)}
        setDescription={(value) => setDescription(value)}
        placeholderTitle={placeholderTitle}
        placeholderDescription={placeholderDescription}
        handleSubmit={handleSubmit}
      />
    );
  };

  return hocComponent;
};
