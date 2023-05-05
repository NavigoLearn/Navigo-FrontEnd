import React, { useState } from 'react';
import HOCForm from '@components/feedback/desktop/HOCForm';
import discord from '@assets/discord.svg';
import github from '@assets/github.svg';
import gmail from '@assets/gmail.svg';
import IssueCard from '@components/feedback/IssueCard';

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
        className='flex flex-col gap-5 items-center justify-center mt-14'
        onSubmit={handleSubmit}
      >
        <textarea
          required
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          placeholder={placeholderTitle}
          className='flex w-6/12 justify-cente rounded-lg text-lg border-0 shadow-sm p-2 outline-none'
        />
        <textarea
          required
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          placeholder={placeholderDescription}
          className='flex justify-center w-6/12 h-40 text-start font-roboto-text rounded-lg text-md p-2 outline-none text-black border-0 shadow-sm'
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
      className={`font-roboto text-xl px-4 py-2 font-normal  rounded-md  transition-all ${
        currentForm ? 'bg-primary text-white' : 'bg-transparent'
      } `}
      onClick={() => setFormType()}
    >
      {formType}
    </button>
  );
};

const DesktopFeedback = () => {
  const [formType, setFormType] = useState('bugReport');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formType === 'featureRequest') {
      //
    }
    if (formType === 'bugReport') {
      //
    }
    if (formType === 'somethingElse') {
      //
    }
  };

  const renderForm = () => {
    if (formType === 'featureRequest') {
      return (
        <StandardForm
          placeholderDescription='please introduce a detailed description of the feature, go as wild as you want :) '
          placeholderTitle='feature request title'
          handleSubmit={() => {
            // submit feature request
          }}
        />
      );
    }
    if (formType === 'bugReport') {
      return (
        <StandardForm
          placeholderDescription="we don't want to fix this but we will do it for you. Please mention your browser and steps to reproduce"
          placeholderTitle='bug title'
          handleSubmit={() => {
            // submit feature request
          }}
        />
      );
    }
    if (formType === 'somethingElse') {
      return (
        <StandardForm
          placeholderDescription='whatever you want to tell us'
          placeholderTitle='just anything'
          handleSubmit={() => {
            // submit feature request
          }}
        />
      );
    }
    return null;
  };

  return (
    <div>
      <h1 className='text-6xl font-kanit-text font-semibold justify-center mt-20 text-center text-thirdary'>
        Our roadmap
      </h1>
      <div className='text-center justify-center flex mt-4'>
        <div className='text-xl text-center w-6/12 text-secondary font-normal font-kanit-text'>
          Above everything, we value your feedback and where you want this
          website to go. We make all our code open source and you can also leave
          suggestions there
        </div>
      </div>
      <div className='flex flex-col-3 gap-20 justify-center mt-10 '>
        <StandardButton
          formType='Feature request'
          setFormType={() => {
            setFormType('featureRequest');
          }}
          currentForm={formType === 'featureRequest'}
        />
        <StandardButton
          formType='Report a bug'
          setFormType={() => {
            setFormType('bugReport');
          }}
          currentForm={formType === 'bugReport'}
        />
        <StandardButton
          formType='Something else'
          setFormType={() => {
            setFormType('somethingElse');
          }}
          currentForm={formType === 'somethingElse'}
        />
      </div>
      {renderForm()}
      <h1 className='text-center mt-20 text-4xl font-kanit-text font-semibold'>
        Planned features
      </h1>
      <div className='justify-center mt-10 text-center'>
        <IssueCard />
      </div>
      <a
        href='https://github.com/orgs/NavigoLearn/discussions'
        aria-label='Link to github discussion'
        target='_blank'
        rel='noreferrer'
        className='flex justify-center text-center mx-auto mt-10 text-xl font-roboto-text font-medium bg-black rounded-2xl py-4 px-8 text-white w-fit hover:underline hover:underline-offset-2'
      >
        See all discussion
      </a>
      <div className='mt-10 flex flex-col'>
        <h1 className='text-center text-2xl font-kanit-text font-medium text-eugene'>
          Connect with us through our
        </h1>
        <div className='mt-5 flex flex-col-3 gap-20 justify-center text-center items-center'>
          {/* disabled eslint for this anchor because WE DONT HAVE A SERVER !!!!!!!! */}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            // insert discord server link here
            href=''
            className='w-32 text-placeholder font-kanit-text translate-y-12'
          >
            discord
            <img src={discord} alt='discord' className='w-full mt-6' />
          </a>
          <a
            href='https://github.com/NavigoLearn'
            target='_blank'
            rel='noreferrer'
            className='w-32 text-placeholder font-kanit-text'
          >
            github organization
            <img src={github} alt='github' className='mt-6' />
          </a>
          <a
            href='mailto:navigolearn@gmail.com'
            className='w-32 text-placeholder font-kanit-text translate-y-12'
          >
            email
            <img src={gmail} alt='gmail' className='flex mt-6' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DesktopFeedback;
