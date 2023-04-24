import React, { useState } from 'react';
import discord from '@assets/discord.svg';
import github from '@assets/github.svg';
import gmail from '@assets/gmail.svg';
import IssueCard from '@components/feedback/IssueCard';

const Feedback = () => {
  const [formType, setFormType] = useState(undefined);
  const [featureTitle, setFeatureTitle] = useState('');
  const [featureDescription, setFeatureDescription] = useState('');
  const [bugTitle, setBugTitle] = useState('');
  const [bugDescription, setBugDescription] = useState('');
  const [otherTitle, setOtherTitle] = useState('');
  const [otherDescription, setOtherDescription] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formType === 'featureRequest') {
      setFeatureTitle('');
      setFeatureDescription('');
    }
    if (formType === 'bugReport') {
      setBugTitle('');
      setBugDescription('');
    }
    if (formType === 'somethingElse') {
      setOtherTitle('');
      setOtherDescription('');
    }
  };

  const renderForm = () => {
    if (formType === 'featureRequest') {
      return (
        <form
          className='flex flex-col gap-5 items-center justify-center mt-14'
          onSubmit={handleSubmit}
        >
          <textarea
            required
            value={featureTitle}
            onChange={({ target }) => setFeatureTitle(target.value)}
            placeholder='Give a descriptive title for your feature:'
            className='flex w-6/12 justify-cente rounded-lg text-lg border-0 shadow-sm'
          />
          <textarea
            required
            value={featureDescription}
            onChange={({ target }) => setFeatureDescription(target.value)}
            placeholder='Description of the feature:'
            className='flex justify-center w-6/12 h-40 text-start font-roboto-text rounded-lg text-lg text-black border-0 shadow-sm'
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
    if (formType === 'bugReport') {
      return (
        <form
          className='flex flex-col gap-5 items-center justify-center mt-14'
          onSubmit={handleSubmit}
        >
          <textarea
            required
            value={bugTitle}
            onChange={({ target }) => setBugTitle(target.value)}
            placeholder='Give a descriptive title for the bug experienced:'
            className='flex w-6/12 justify-cente rounded-lg text-lg border-0 shadow-sm'
          />
          <textarea
            required
            value={bugDescription}
            onChange={({ target }) => setBugDescription(target.value)}
            placeholder='Steps to reproduce:'
            className='flex justify-center w-6/12 h-40 text-start font-roboto-text rounded-lg text-lg text-black border-0 shadow-sm'
          />
          <button
            type='submit'
            className='bg-primary px-12 py-2 text-white rounded-full font-roboto-text font-medium mt-4'
          >
            Send
          </button>
        </form>
      );
    }
    if (formType === 'somethingElse') {
      return (
        <form
          className='flex flex-col gap-5 items-center justify-center mt-14'
          onSubmit={handleSubmit}
        >
          <textarea
            required
            value={otherTitle}
            onChange={({ target }) => setOtherTitle(target.value)}
            placeholder='Tell us whatever you would like:'
            className='flex w-6/12 justify-cente rounded-lg text-lg border-0 shadow-sm'
          />
          <textarea
            required
            value={otherDescription}
            onChange={({ target }) => setOtherDescription(target.value)}
            placeholder='As many details as possible:'
            className='flex justify-center w-6/12 h-40 text-start font-roboto-text rounded-lg text-lg text-black border-0 shadow-sm'
          />
          <button
            type='submit'
            className='bg-primary px-12 py-2 text-white rounded-full font-roboto-text font-medium mt-4'
          >
            Send
          </button>
        </form>
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
        <h2 className='text-xl text-center w-6/12 text-secondary font-normal font-kanit-text'>
          Above everything, we value your feedback and where you want this
          website to go. We make all our code open source and you can also leave
          suggestions there
        </h2>
      </div>
      <div className='flex flex-col-3 gap-20 justify-center mt-10 '>
        <button
          type='button'
          className='font-roboto text-xl font-normal hover:underline'
          onClick={() => setFormType('featureRequest')}
        >
          Feature Request
        </button>
        <button
          type='button'
          className='bg-primary py-2 px-8 font-roboto text-xl font-medium rounded-full text-white hover:underline'
          onClick={() => setFormType('bugReport')}
        >
          Report a Bug
        </button>
        <button
          type='button'
          className='font-roboto text-xl font-normal hover:underline'
          onClick={() => setFormType('somethingElse')}
        >
          Something else
        </button>
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
        className='flex justify-center text-center mx-auto mt-10 text-xl font-roboto-text font-medium bg-black rounded-2xl py-4 px-8 text-white w-fit hover:underline'
      >
        See all discussion
      </a>
      <div className='mt-10 flex flex-col'>
        <h1 className='text-center text-2xl font-kanit-text font-medium text-eugene'>
          Connect with us through our
        </h1>
        <div className='mt-5 flex flex-col-3 gap-10 justify-center text-center items-center'>
          {/* disabled eslint for this anchor because WE DONT HAVE A SERVER !!!!!!!! */}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            // insert discord server link here
            href=''
            className='w-48 text-placeholder font-kanit-text translate-y-12'
          >
            discord
            <img src={discord} alt='discord' className='w-full mt-6' />
          </a>
          <a
            href='https://github.com/NavigoLearn'
            target='_blank'
            rel='noreferrer'
            className='w-48 text-placeholder font-kanit-text'
          >
            github organization
            <img src={github} alt='github' className='mt-6' />
          </a>
          <a
            href='mailto:navigolearn@gmail.com'
            className='w-48 text-placeholder font-kanit-text translate-y-12'
          >
            email
            <img src={gmail} alt='gmail' className='flex' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
