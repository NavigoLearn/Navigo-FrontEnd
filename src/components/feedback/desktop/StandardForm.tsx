import React from 'react';
import HOCForm from '@components/feedback/desktop/HOCForm';

type FormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  description: string;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  placeholderTitle: string;
  placeholderDescription: string;
};

const StandardForm = HOCForm(
  ({
    handleSubmit,
    title,
    description,
    setDescription,
    setTitle,
    placeholderTitle,
    placeholderDescription,
  }: FormProps) => {
    return (
      <form
        className='flex flex-col gap-5 items-center justify-center mt-14 select-none'
        onSubmit={handleSubmit}
      >
        <textarea
          required
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          placeholder={placeholderTitle}
          className='flex w-11/12 md:w-6/12 justify-cente rounded-lg text-lg border-0 shadow-sm p-2 outline-none'
        />
        <textarea
          required
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          placeholder={placeholderDescription}
          className='flex justify-center w-11/12 md:w-6/12 h-40 text-start font-roboto-text rounded-lg text-md p-2 outline-none text-black border-0 shadow-sm'
        />
        <button
          type='submit'
          className='bg-primary px-12 py-2 text-white rounded-full font-roboto-text font-medium mt-4 '
        >
          Send
        </button>
      </form>
    );
  }
);

export default StandardForm;
