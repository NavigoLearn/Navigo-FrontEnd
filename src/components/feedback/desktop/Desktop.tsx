import React, { useState } from 'react';
import StandardButton from '@components/feedback/desktop/StandardButton';
import StandardForm from '@components/feedback/desktop/StandardForm';
import IssuesList from '@components/feedback/IssuesList';
import Socials from '@components/feedback/desktop/Socials';

const DesktopFeedback = () => {
  const [formType, setFormType] = useState('bugReport');
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    type: 'bugReport' | 'featureRequest' | 'somethingElse'
  ) => {
    e.preventDefault();
    if (type === 'featureRequest') {
      //
    }
    if (type === 'bugReport') {
      //
    }
    if (type === 'somethingElse') {
      //
    }
  };

  const renderForm = () => {
    if (formType === 'featureRequest') {
      return (
        <StandardForm
          placeholderDescription='please introduce a detailed description of the feature, go as wild as you want :) '
          placeholderTitle='feature request title'
          handleSubmit={(e) => {
            // submit feature request
            handleSubmit(e, 'featureRequest');
          }}
        />
      );
    }
    if (formType === 'bugReport') {
      return (
        <StandardForm
          placeholderDescription="we don't want to fix this but we will do it for you. Please mention your browser and steps to reproduce"
          placeholderTitle='bug title'
          handleSubmit={(e) => {
            // submit feature request
            handleSubmit(e, 'bugReport');
          }}
        />
      );
    }
    if (formType === 'somethingElse') {
      return (
        <StandardForm
          placeholderDescription='whatever you want to tell us'
          placeholderTitle='just anything'
          handleSubmit={(e) => {
            // submit feature request
            handleSubmit(e, 'somethingElse');
          }}
        />
      );
    }
    return null;
  };

  return (
    <div>
      <h1 className='text-2xl md:text-6xl font-kanit-text font-semibold justify-center mt-20 text-center text-thirdary'>
        Our roadmap
      </h1>
      <div className='text-center justify-center flex mt-4'>
        <div className='text-md md:text-xl text-center w-full p-1 md:w-6/12 text-secondary font-normal font-kanit-text'>
          Above everything, we value your feedback and where you want this
          website to go. We make all our code open source and you can also leave
          suggestions there
        </div>
      </div>
      <div className='flex flex-col-3 gap-2 md:gap-20 justify-center mt-10 '>
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
      <div className='justify-center mt-10 text-center mb-20'>
        <IssuesList />
      </div>
      <a
        href='https://github.com/orgs/NavigoLearn/discussions'
        aria-label='Link to github discussion'
        target='_blank'
        rel='noreferrer'
        className='flex justify-center text-center mx-auto  text-xl font-roboto-text font-medium bg-black rounded-2xl py-4 px-8 text-white w-fit transition-all border-2 border-transparent hover:border-black  hover:bg-transparent hover:text-black'
      >
        See all discussion
      </a>
      <Socials />
      <div className='h-32' />
    </div>
  );
};

export default DesktopFeedback;
