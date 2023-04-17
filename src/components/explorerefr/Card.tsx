import React from 'react';

const Card = () => {
  return (
    <div className='bg-white w-[280px] sm:w-96 mt-7 sm:mt-9 h-40 sm:h-52 relative'>
      <div className='flex justify-center mt-3'>
        <h1 className='font-kanit-text text-xl sm:text-2xl flex'>React</h1>
        <div className='font-roboto'>
          <div className='absolute pl-14 text-[9px] sm:text-xs sm:pl-[83px] flex flex-col justify-center items-center'>
            <h1 className=''>made by</h1>
            <h1>eugenutzu</h1>
          </div>
        </div>
      </div>
      <div className='box-border h-[85px] w-full p-5 text-xs text-center sm:h-32 sm:text-sm sm:p-8'>
        <p className='line-clamp-3'>
          A roadmap for anyone looking to get on with the fundamentals of react
          fwafw faw s fwa d sad adwd ad dwad awfawn afk fwaf w fwaf fwafw dfasf
          aw fasdf wa f saf aw f waf waf afd f sd fafa
        </p>
      </div>
      <div className='flex justify-center items-center'>
        <button type="button" className='bg-secondary w-24 h-7'>
          Explore
        </button>
      </div>
    </div>
  );
};

export default Card;
