import React, { useState } from 'react';
import likeButton from '@assets/heart.svg';
import likeButtonFilled from '@assets/heartfill.svg';
import { CardType } from '@type/explore/card';

const Card = ({ cardStore }: { cardStore: CardType }) => {
  const { name, author, description, likes, id } = cardStore;
  const [heartClicked, setHeartClicked] = useState(true);
  const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];

  function abbreviateNumber(number: number): string | number {
    // handle 0 specifically
    if (number === 0) return 0;
    // what tier? (determines SI symbol)
    const tier = Math.floor(Math.log10(Math.abs(number)) / 3);
    // if zero, we don't need a suffix
    if (tier === 0) return number;
    // get suffix and determine scale
    const suffix = SI_SYMBOL[tier];
    const scale = 10 ** (tier * 3);
    // scale the number
    const scaled = number / scale;
    // format number and add suffix
    return scaled.toFixed(1) + suffix;
  }

  return (
    <div className='bg-white w-[280px] sm:w-96 h-40 sm:h-52 relative shadow-standard rounded-lg 2xl:w-[460px] 2xl:h-64'>
      <div className='flex justify-center mt-3'>
        <h1 className='font-kanit-text text-xl sm:text-2xl flex 2xl:text-3xl'>
          {name}
        </h1>
        <div className='font-roboto'>
          <div className='absolute pl-14 text-[9px] sm:text-xs sm:pl-[83px] flex flex-col justify-center items-center text-placeholder 2xl:text-sm 2xl:pl-[102px]'>
            <h1>made by</h1>
            <h1>{author}</h1>
          </div>
        </div>
      </div>
      <div className='box-border h-[85px] w-full px-6 py-5 text-xs text-center sm:h-[120px] sm:text-sm sm:p-8 font-roboto-text text-secondary 2xl:h-36 2xl:text-base 2xl:py-10 2xl:px-9'>
        <p className='line-clamp-3'>{description}</p>
      </div>
      <div className='flex justify-center items-center relative 2xl:mt-3'>
        <button
          type='button'
          className='bg-secondary w-20 h-7 text-white text-xs sm:w-24 sm:h-8 sm:text-sm rounded-lg font-roboto-text 2xl:text-base 2xl:w-28 2xl:h-9'
          onClick={() => {
            window.location.href = `/roadmap/${id}`;
          }}
        >
          Explore
        </button>
        <div className='absolute right-4 flex items-center justify-center flex-col -top-2'>
          <h1 className='text-[10px] sm:text-xs 2xl:text-sm'>
            {abbreviateNumber(likes)}
          </h1>
          <button
            type='button'
            className=''
            onClick={() => setHeartClicked((prev) => !prev)}
          >
            {heartClicked ? (
              <img
                src={likeButton}
                alt='heart'
                className='h-5 w-5 sm:h-6 sm:w-6 2xl:h-8 2xl:w-8'
              />
            ) : (
              <img
                src={likeButtonFilled}
                alt='heart'
                className='h-5 w-5 sm:h-6 sm:w-6 2xl:h-8 2xl:w-8'
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
