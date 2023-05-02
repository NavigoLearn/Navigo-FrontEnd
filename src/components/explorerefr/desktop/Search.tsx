import React, { useState, useEffect } from 'react';
import loupe from '@assets/loupe.svg';
import warn from '@assets/warningErr.webp';
import chevroleftduo from '@assets/chevron-left-duo.svg';
import chevronrightduo from '@assets/chevron-right-duo.svg';
import chevronleft from '@assets/chevron-left.svg';
import chevronright from '@assets/chevron-right.svg';
import cardsFromApi, {
  setCardsFromApiDefault,
} from '@store/card_store_explore';
import FilterAugD from './filterhoc/FilterAugD';
import Card from '../Card';

const SearchDesktop = () => {
  const [query, setQuery] = useState('');
  const [render, setRender] = useState(false);
  const cardStore = cardsFromApi.get();
  const [pageNr, setPageNr] = useState(1);
  const isDisabled = pageNr <= 1;
  const [isSafari, setIsSafari] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    setIsSafari(
      navigator.userAgent.indexOf('Safari') !== -1 &&
        navigator.userAgent.indexOf('Chrome') === -1
    );
    setCardsFromApiDefault().then(() => {
      setRender((prev) => !prev);
    });
  }, []);
  // const CompFilter = AugmentComp(UIButton, UIDropdown);
  return (
    <div>
      <form
        action='submit'
        className={`flex justify-center ${isSafari ? 'mt-44' : 'mt-24'}`}
        onSubmit={handleSubmit}
      >
        <div className={`relative ${isSafari ? 'mt-32' : ''}`}>
          <input
            required
            value={query}
            onChange={({ target }) => setQuery(target.value)}
            type='text'
            placeholder='Search for a roadmap'
            className='h-[75px] w-[765px] bg-white z-10 rounded-full shadow-standard pl-20 text-2xl placeholder:font-roboto-text pb-[2px] focus:outline-none 2xl:w-[1000px]'
          />
          <img
            src={loupe}
            alt='LoupeSearch'
            className='absolute top-6 w-8 h-8 left-5'
          />
          <button
            type='submit'
            className='absolute z-10 right-[3%] top-[20.5%] bg-primary py-2.5 px-10 rounded-full text-white font-roboto-text'
          >
            Search
          </button>
        </div>
      </form>

      <FilterAugD />

      <div className='bg-background h-20 w-full -mt-20 opacity-75 relative flex justify-center items-center 2xl:h-24 2xl:-mt-24'>
        <div className='w-full bg-background h-7 2xl:h-8 flex justify-center items-center absolute'>
          <div className='bg-red-100 w-96 h-full flex justify-center items-center text-opacity-40 text-sm border-2 border-red-700 border-opacity-50 rounded-md relative 2xl:text-base 2xl:w-[420px]'>
            <img
              src={warn}
              alt='postBetWarning'
              className='w-5 h-5 absolute left-1'
            />
            Filters will be added post beta default: Likes.
          </div>
        </div>
      </div>

      {/* <div className='bg-background w-full h-24 opacity-70 -mt-20' />
      <div className='w-72 bg-red-100 rounded-md flex relative fadeInAnimation select-none z-20 '>
        <div className='absolute h-full w-1 bg-red-800 rounded-md ' />
        <div className=' w-8 relative  '>
          <img
            src={warn}
            className='absolute top-4 left-4'
            width='20'
            height='20'
            alt=''
          />
        </div>
        <div className='w-full ml-7 mt-1 mr-1 mb-4  '>
          <div className='mt-2 font-semibold  text-sm font-roboto-text  text-red-800 '>
            Warning
          </div>
          <div className='text-xs mt-2 font-roboto-text text-red-600'>
            {message}
          </div>
        </div>
      </div> */}

      <div className='flex justify-center items-center mt-16 '>
        <ul className='grid grid-cols-2 gap-x-9 gap-y-11 xl:grid-cols-3'>
          {Object.keys(cardStore).map((card: string) => (
            <div key={card} className='flex items-center justify-center'>
              <Card cardStore={cardStore[card]} />
            </div>
          ))}
        </ul>
      </div>

      <div className='flex justify-center items-center my-8'>
        <button type='button'>
          <img
            src={chevroleftduo}
            alt='doubleArrowLeft'
            className='w-8 h-8 2xl:w-9 2xl:h-9'
          />
        </button>
        <button
          type='button'
          onClick={() => setPageNr((prev) => prev - 1)}
          disabled={isDisabled}
        >
          <img
            src={chevronleft}
            alt='ArrowLeft'
            className='w-9 h-9 2xl:w-11 2xl:h-11'
          />
        </button>
        <span className='text-xl 2xl:text-2xl'>{pageNr}</span>
        <button type='button' onClick={() => setPageNr((prev) => prev + 1)}>
          <img
            src={chevronright}
            alt='ArrowRight'
            className='w-9 h-9 2xl:w-11 2xl:h-11'
          />
        </button>
        <button type='button'>
          <img
            src={chevronrightduo}
            alt='doubleArrowRight'
            className='w-8 h-8 2xl:w-9 2xl:h-9'
          />
        </button>
      </div>
    </div>
  );
};

export default SearchDesktop;
