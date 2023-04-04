import React, { useState, useEffect } from 'react';
import CardGrid from '../searchdesktop/CardGrid';
import SortByMenu from './SortByMenu';
import SortFilter from './SortFilter';

type Roamdmap3 = {
  id: number;
  name: string;
  madeby: string;
  nolikes: number;
  description: string;
};

const SearchMobile = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState<Roamdmap3[]>([]);
  const [clickFilter, setClickFilter] = useState(false);
  const [clickSort, setClickSort] = useState(false);

  console.log(clickFilter);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'src/components/search/searchdesktop/roadmapTests.json'
      );
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleClick = (stateVar: 'filter' | 'sort') => {
    if (stateVar === 'filter') {
      setClickFilter((prev) => !prev);
    } else if (stateVar === 'sort') {
      setClickSort((prev) => !prev);
    }

    const body = document.querySelector('body');
    if (body) {
      if (stateVar === 'filter' && clickFilter) {
        body.style.overflow = 'auto';
      } else if (stateVar === 'sort' && clickSort) {
        body.style.overflow = 'auto';
      } else {
        body.style.overflow = 'hidden';
      }
    }
  };

  return (
    <div>
      <div>
        {clickSort && (
          <SortByMenu clickSort={clickSort} handleClick={handleClick} />
        )}
      </div>
      <div>
        {clickFilter && (
          <SortFilter clickFilter={clickFilter} handleClick={handleClick} />
        )}
      </div>
      <div className='mt-28 h-full'>
        <div className='mx-12 grid grid-col justify-center items-center text-center'>
          <div className=''>
            <h1 className='text-4xl font-kanit-text'>
              The journey of 1000 steps
            </h1>
            <h1 className='text-4xl font-kanit-text mt-5'>
              starts with one roadmap
            </h1>
          </div>
          <form
            className='flex justify-center mt-[72px]'
            onSubmit={handleSubmit}
          >
            <div className='relative'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                className='w-8 h-8 absolute top-[28%] left-[2.8%] stroke-current text-gray-400'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
              </svg>
              <input
                value={query}
                onChange={({ target }) => setQuery(target.value)}
                type='text'
                placeholder='Search for a roadmap'
                className='h-[75px] w-[500px] bg-white rounded-full pl-20 text-2xl placeholder:font-roboto-text pb-[2px] focus:outline-none'
              />
            </div>
          </form>
          <div className='flex justify-between mt-11 px-[50px]'>
            <button type='button' onClick={() => handleClick('filter')}>
              <div className='bg-secondary flex justify-center items-center shadow-standard rounded-xl w-[160px] text-white h-[55px]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 inline-block'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z'
                  />
                </svg>
                <span className='font-roboto-text text-xl inline-block ml-[12px]'>
                  Filter
                </span>
              </div>
            </button>
            <div>
              <button type='button' onClick={() => handleClick('sort')}>
                <div className='bg-secondary flex justify-center items-center shadow-standard rounded-xl w-[160px] text-white h-[55px]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 inline-block'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12'
                    />
                  </svg>
                  <span className='font-roboto-text text-xl inline-block ml-[12px]'>
                    Sort By
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <ul className='flex justify-center mt-[100px] items-center w-full m-auto'>
          <div className='grid big:grid-cols-3 medium:gap-x-[48px] w-full h-full m-auto gap-y-[35px] items-center justify-center'>
            {data.map((value) => (
              <div
                key={value.id}
                className='w-full justify-center items-center'
              >
                <CardGrid
                  name={value.name}
                  madeby={value.madeby}
                  nolikes={value.nolikes}
                  description={value.description}
                />
              </div>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SearchMobile;
