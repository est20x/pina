'use client';

import dynamic from 'next/dynamic';

import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

import { carouselSettings } from '@/utils/CarouselSettings';
import photo1 from '../../../assets/1.jpg';
import photo2 from '../../../assets/2.jpg';
import photo3 from '../../../assets/3.jpg';
import photo4 from '../../../assets/4.jpg';
import photo5 from '../../../assets/5.jpg';
import photo6 from '../../../assets/6.jpg';
import photo7 from '../../../assets/7.jpg';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

export const OurWorks = () => {
  const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7];

  return (
    <section id="our-works" className="flex flex-col items-center mt-8 mb-16">
      <h1 className="text-5xl max-md:text-3xl font-bold text-orange mb-4 relative border-b-4 border-orange pb-2">
        Наші роботи
      </h1>
      <div className="w-full max-w-5xl">
        <Slider {...carouselSettings}>
          {photos.map((photo, idx) => (
            <div key={idx} className="p-2">
              <img src={photo.src} alt={`Our work ${idx + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
