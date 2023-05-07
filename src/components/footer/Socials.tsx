import React from 'react';
import discord from '@assets/discord-footer.svg';
import github from '@assets/github-footer.svg';
import gmail from '@assets/gmail-footer.svg';

const Socials = () => {
  return (
    <div className='mt-2 flex flex-col'>
      <div className=' md:gap-10 flex flex-row gap-2 justify-center text-center items-center'>
        {/* disabled eslint for this anchor because WE DONT HAVE A SERVER !!!!!!!! */}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          // insert discord server link here
          href='https://discord.gg/TRGqNXvj'
          target='_blank'
          className='text-placeholder font-kanit-text'
          rel='noreferrer'
        >
          <img src={discord} alt='discord' className='w-8 h-8 mt-6' />
        </a>
        <a
          href='https://github.com/NavigoLearn'
          target='_blank'
          rel='noreferrer'
          className='text-placeholder font-kanit-text'
        >
          <img
            src={github}
            alt='github'
            className='mt-6 w-8 h-8 translate-y-2'
          />
        </a>
        <a
          href='mailto:navigolearn@gmail.com'
          className='text-placeholder font-kanit-text'
        >
          <img src={gmail} alt='gmail' className='flex md:mt-6 w-8 h-8' />
        </a>
      </div>
    </div>
  );
};

export default Socials;
