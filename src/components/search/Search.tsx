import React, { useState, useEffect } from 'react';
import './curve.css';
import GridFilters from './GridFilters';
import CardGrid from './CardGrid';
import Scroll from './Scroll';

type Roamdmap1 = {
  id: number;
  name: string;
  madeby: string;
  nolikes: number;
  description: string;
};

const Search = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState<Roamdmap1[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('src/components/search/roadmapTests.json');
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  const filterItems = (): Roamdmap1[] => {
    if (!query) {
      return data;
    }
    return data.filter((roadmap) =>
      roadmap.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className='relative mt-40'>
      <div className='bg-[#cfeefc] absolute w-full h-40 top-[-160px]' />
      <main className='pb-8'>
        <div className='absolute top-0 left-0 w-full custom-shape-divider-top-1680108220 '>
          <svg
            data-name='Layer 1"'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
              fill='#cfeefc'
            />
          </svg>
        </div>
        <div className='flex justify-center'>
          <h1 className='text-4xl relative z-10 mb-10 font-kanit-text'>
            The journey of 1000 miles starts with one roadmap
          </h1>
        </div>
        <form className='flex justify-center mt-10' onSubmit={handleSubmit}>
          <div className='relative'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              className='w-8 h-8 absolute z-20 top-[28%] left-[2.8%] stroke-current text-gray-400'
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
              className='h-[75px] w-96 sm:w-[850px] bg-white z-10 rounded-full shadow-standard pl-20 text-2xl placeholder:font-roboto-text pb-[2px] focus:outline-none'
            />
            <button
              type='submit'
              className='absolute z-10 right-[3%] top-[20.5%] bg-primary py-2.5 px-10 rounded-full text-white font-roboto-text'
            >
              Search
            </button>
          </div>
        </form>
        <div className='flex justify-center items-center relative'>
          <GridFilters />
        </div>

        <ul className='flex justify-center mt-[228px]'>
          <div className='grid big:grid-cols-3 medium:gap-x-[48px] medium:gap-y-[61px] medium:grid-cols-2 gap-y-[35px]'>
            {filterItems().map((value) => (
              <div key={value.id} className='w-[389px]'>
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

        <Scroll />
      </main>
    </div>
  );
};

export default Search;
