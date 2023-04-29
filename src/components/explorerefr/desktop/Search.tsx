import React, { useState, useEffect } from 'react';
import loupe from '@assets/loupe.svg';
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    setCardsFromApiDefault().then(() => {
      setRender((prev) => !prev);
    });
  }, []);
  // const CompFilter = AugmentComp(UIButton, UIDropdown);
  return (
    <div>
      <form
        action='submit'
        className='flex justify-center mt-24'
        onSubmit={handleSubmit}
      >
        <div className='relative'>
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
