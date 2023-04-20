import React, { useEffect, useRef, useState } from 'react';
import loupe from '@assets/loupe.svg';
import filter from '@assets/filter.svg';
import sort from '@assets/sortby.svg';
import chevroleftduo from '@assets/chevron-left-duo.svg';
import chevronrightduo from '@assets/chevron-right-duo.svg';
import chevronleft from '@assets/chevron-left.svg';
import chevronright from '@assets/chevron-right.svg';
// import Cookies from '@components/explorerefr/mobile/cookies/Cookies';
import cardsFromApi, {
  setCardsFromApi,
  setCardsFromApiDefault,
} from '@store/card_store';
import { CardType } from '@type/explore/card';
import SortBy from './SortBy';
// import Filter from './Filter';
import FilterAug from './FilterManager';
import Card from '../Card';

const SearchMobile = () => {
  const [clickFilter, setClickFilter] = useState(false);
  const [clickSort, setClickSort] = useState(false);
  const [render, setRender] = useState(false);
  const [pageNr, setPageNr] = useState(1);
  const isDisabled = pageNr <= 1;
  const cardStore = cardsFromApi.get();

  useEffect(() => {
    setCardsFromApiDefault().then(() => {
      setRender((prev) => !prev);
      console.log(cardsFromApi.get());
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleClick = (stateVar: 'sort' | 'filter') => {
    if (stateVar === 'sort') {
      setClickSort((prev) => !prev);
    } else if (stateVar === 'filter') {
      setClickFilter((prev) => !prev);
    }

    const body = document.querySelector('body');
    if (stateVar === 'filter' && clickFilter) {
      body.style.overflow = 'auto';
    } else if (stateVar === 'sort' && clickSort) {
      body.style.overflow = 'auto';
    } else {
      body.style.overflow = 'hidden';
    }
  };

  return (
    <div>
      {/* <Cookies /> */}
      <div>{clickFilter && <FilterAug handleClick={handleClick} />}</div>
      <div>{clickSort && <SortBy handleClick={handleClick} />}</div>
      <form
        className='flex justify-center items-center mt-9 sm:mt-12'
        action='submit'
        onSubmit={handleSubmit}
      >
        <div className='relative'>
          <input
            type='text'
            className='rounded-full w-[273px] h-10 placeholder: text-[14px] pl-10 font-roboto-text outline-none shadow-standard sm:w-[375px] sm:h-12'
            placeholder='Search for a roadmap_static'
          />
          <img
            src={loupe}
            alt='searchIcon'
            className='absolute left-3 top-3 sm:top-[14px]'
          />
        </div>
      </form>

      <div className='flex justify-center items-center space-x-12 mt-7 sm:mt-9'>
        <button type='button' onClick={() => handleClick('filter')}>
          <div className='bg-primary flex justify-center items-center shadow-standard rounded-lg w-[90px] text-white h-[30px] sm:w-[122px] sm:h-[42px]'>
            <img
              src={filter}
              alt='filterButton'
              className='inline-block h-4 w-4 sm:h-5 sm:w-5'
            />
            <span className='font-roboto-text inline-block ml-[6px] text-[13px] sm:text-[16px] sm:ml-[8px]'>
              Filter
            </span>
          </div>
        </button>
        <button type='button' onClick={() => handleClick('sort')}>
          <div className='bg-primary flex justify-center items-center shadow-standard rounded-lg w-[90px] text-white h-[30px] sm:w-[122px] sm:h-[42px]'>
            <img
              src={sort}
              alt='filterButton'
              className='inline-block h-4 w-4'
            />
            <span className='font-roboto-text inline-block ml-[6px] text-[13px] sm:text-[16px] sm:ml-[8px]'>
              Sort By
            </span>
          </div>
        </button>
      </div>

      <div className='mt-10 sm:mt-12'>
        <ul className='flex flex-col gap-7 sm:gap-9'>
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
            className='w-5 h-5 sm:w-7 sm:h-7'
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
            className='w-6 h-6 sm:w-8 sm:h-8'
          />
        </button>
        <span>{pageNr}</span>
        <button type='button' onClick={() => setPageNr((prev) => prev + 1)}>
          <img
            src={chevronright}
            alt='ArrowRight'
            className='w-6 h-6 sm:w-8 sm:h-8'
          />
        </button>
        <button type='button'>
          <img
            src={chevronrightduo}
            alt='doubleArrowRight'
            className='w-5 h-5 sm:w-8 sm:h-8'
          />
        </button>
      </div>
    </div>
  );
};

export default SearchMobile;
