'use client';

import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

import teamAnimation from '../../../assets/icons/team.json';

export const AboutUs = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: teamAnimation,
      });
    }
  }, []);

  return (
    <section id="about-us" className="flex flex-col items-center md:flex-row md:justify-center mt-8 w-full max-w-[1200px] mx-auto">
      <div className="text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start">
        <h1 className="text-5xl max-md:text-3xl font-bold text-orange mb-4 relative border-b-4 border-orange pb-2">
          Про нас
        </h1>
        <p className="text-lg text-black">
          Ми — команда спеціалістів з утеплення та звукоізоляції приміщень поліуретановою піною з досвідом понад 3 роки.
          Працюємо з 2021 року, виконали понад 200 проєктів в Україні та Європі. Наші фахівці володіють сучасними
          технологіями утеплення, адаптованими до європейських стандартів.
        </p>
        <p className="text-lg text-black">
          До 2022 року працювали на об'єктах у Чехії та Німеччині, звідки перейняли передові техніки та обладнання для
          утеплення поліуретаном.
        </p>
      </div>
      <div className="md:w-1/2 md:ml-8 flex justify-center mt-6 md:mt-0 w-[400px]" ref={animationContainer}></div>
    </section>
  );
};
