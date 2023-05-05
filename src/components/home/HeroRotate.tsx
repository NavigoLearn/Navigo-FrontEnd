import React, { useRef, useEffect, useState, useMemo } from 'react';
import {
  arrangeImagesAndSetOnclick,
  initializeImgCenter,
  populateParams,
  switchPlaces,
} from '@typescript/home/hero';
import {
  PopulatedParams,
  HeroRotateProps,
  BaseParams,
} from '@type/home/hero-rotate';
import anime from 'animejs/lib/anime';
import useScrollTop from '@hooks/useScrollTop';

const HeroRotate = ({ scale, animSpeed }: HeroRotateProps) => {
  const [set, setSet] = useState(false);
  useScrollTop();
  const rootRef = useRef<HTMLDivElement>(null);
  const allowed = useRef(true);
  const centerSrc = '/home/nextjs.png';
  const baseArr: string[] = [
    '/home/cpp.png',
    '/home/csharp.png',
    '/home/css.png',
    '/home/html.png',
    '/home/js.png',
    '/home/python.png',
    '/home/pytorch.png',
    '/home/react.png',
    '/home/ts.png',
  ];

  const baseParams: BaseParams = {
    width: 800,
    height: 800,
    rotatingImagesPercent: 0.09,
    centerImagePercent: 0.4,
    duration: 20000,
  };
  const params: PopulatedParams = useMemo(
    () =>
      populateParams(baseParams, {
        scale,
        animSpeed,
      }),
    []
  );

  useEffect(() => {
    // sets the params according to the props

    rootRef.current.style.width = `${params.width}px`;
    rootRef.current.style.height = `${params.height}px`;
    rootRef.current.style.left = `calc(50% - ${params.width / 2}px)`;
    setSet(true); // the animation will start at the second render not the first
    // the first render will only create the scafolding for the animation
  }, []);

  useEffect(() => {
    if (set) {
      // initialize the images and their positions + onclick
      arrangeImagesAndSetOnclick(baseArr, params, allowed);
      // sets the width and height of the main image
      initializeImgCenter('centerMain', params);
      // remove the hidden tag from the center div
      document.getElementById('center').classList.remove('hidden');
      // adds the animations for the center and small images
      anime({
        targets: '#center',
        rotateZ: 360,
        duration: params.duration,
        easing: 'linear',
        loop: true,
      });
      // counter rotate the other divs to keep them at the same rotation
      anime({
        targets: ['.smallTarget', '.mainTarget'],
        rotateZ: -360,
        duration: params.duration,
        easing: 'linear',
        loop: true,
      });

      // starts timeout for images switching
      function switchPlacesTimeout() {
        const elArr = document.querySelectorAll('.smallTarget');
        const randomIdx = Math.floor(Math.random() * elArr.length);
        const randomElId = elArr[randomIdx].id;
        switchPlaces(allowed, randomElId);
        setTimeout(() => {
          switchPlacesTimeout();
        }, 2500);
      }

      switchPlacesTimeout();
    }
  }, [set]);

  return (
    <div
      ref={rootRef}
      className='flex justify-center items-center overflow-hidden bg-background'
    >
      <div id='center' className='w-1 h-1 border-green-400 relative hidden'>
        {set && (
          <>
            <button
              type='button'
              id='centerMain'
              className='absolute mainTarget rot'
            >
              <img
                alt='imageCenter'
                id='mainImg'
                className='w-full h-full'
                src={centerSrc}
              />
            </button>
            {baseArr.map((el, i) => {
              return (
                <button
                  type='button'
                  className='w-2 h-2 smallTarget'
                  key={el}
                  id={`${el}`}
                >
                  <img
                    alt='imagerotating'
                    src={el}
                    className='w-full h-full  rounded-md'
                  />
                </button>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default HeroRotate;
