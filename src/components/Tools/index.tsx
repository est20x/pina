'use client';

import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

import toolsAnimation from '../../../assets/icons/tools.json';

export const Tools = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: toolsAnimation,
      });
    }
  }, []);

  return (
    <section id="tools" className="flex flex-col items-center md:flex-row md:justify-center mt-8 w-full max-w-[1200px] mx-auto">
      <div className="text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start">
        <h1 className="text-5xl max-md:text-3xl font-bold text-orange mb-4 relative border-b-4 border-orange pb-2">
          Чим працюємо
        </h1>
        <p className="text-lg text-black">
          Для робіт використовуємо сучасні професійні станції для нанесення піни:{' '}
          <strong> ППУ Profinstrument А-250 </strong> — потужне обладнання, що гарантує рівномірне розподілення та
          оптимальну якість. Станції працюють від мереж 220 та 380V.
        </p>
        <p className="text-lg text-black">Для точного нанесення використовуємо рівні, які гарантують повну точність.</p>
        <p className="text-lg text-black">
          Працюємо з оригінальними сумішами з Німеччини та пропонуємо їх за гуртовою ціною для вас — це вигідніше, ніж
          купувати матеріали окремо.
        </p>
      </div>
      <div
        className="md:w-1/2 md:ml-8 flex justify-center mt-6 md:mt-0 w-[400px]"
        ref={animationContainer}
      ></div>
    </section>
  );
};
