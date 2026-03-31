'use client';

import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

import { useIsMobile } from '@/hooks/useIsMobile';
import constructionAnimation from '../../../assets/icons/construction.json';

export const Options = () => {
  const desktopAnimationContainer = useRef(null);
  const mobileAnimationContainer = useRef(null);
  const isMobile = useIsMobile(768);

  useEffect(() => {
    const animationContainer = isMobile ? mobileAnimationContainer.current : desktopAnimationContainer.current;

    if (animationContainer) {
      lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: constructionAnimation,
      });
    }
  }, [isMobile]);

  return (
    <section
      id="options"
      className="flex flex-col items-center md:flex-row md:justify-center mt-8 w-full max-w-[1200px] mx-auto"
    >
      {!isMobile && (
        <div
          className="md:w-1/2 md:mr-8 flex justify-center mt-6 md:mt-0 w-[400px]"
          ref={desktopAnimationContainer}
        ></div>
      )}
      <div className="text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start">
        <h1 className="text-5xl max-md:text-3xl font-bold text-orange mb-4 relative border-b-4 border-orange pb-2">
          Що вміємо
        </h1>
        <p className="text-lg text-black">
          Утеплюємо стіни, дахи, підлоги та стелі різної геометрії та складності. За день можемо покрити до 200 м², що
          дозволяє швидко та якісно виконувати утеплення.
        </p>
        <p className="text-lg text-black">
          Для порівняння: звичайний приватний будинок ми утеплюємо всього за 2 дні — це значно економить ваш час та
          витрати.
        </p>
        <p className="text-lg text-black">
          В нас працюють лише досвідчені фахівці, які забезпечують якісне нанесення та повний контроль за процесом.
        </p>
      </div>
      {isMobile && (
        <div
          className="md:w-1/2 md:mr-8 flex justify-center mt-6 md:mt-0 w-[400px]"
          ref={mobileAnimationContainer}
        ></div>
      )}
    </section>
  );
};
