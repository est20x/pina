import Image from 'next/image';

import Logo from '../../../assets/logo.svg';
import manImage from '../../../assets/man.png';
import { AdvantageBlock } from './AdvantageBlock';
import { PhoneButton } from './PhoneButton';

export const Intro = () => {
  return (
    <section className="bg-white relative w-full min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/30 to-transparent blur-[150px] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="mt-16 flex flex-col justify-center items-center text-center">
        <Logo className="mt-16 w-48 h-48 mb-6" />

        <h1 className="text-5xl max-md:text-3xl font-bold text-orange mb-4 relative pb-2">
          Утеплення будинків поліуретановою піною
        </h1>
        <p className="text-3xl max-md:text-xl text-black font-semibold mt-6 mb-2 pb-2">
          В Івано-Франківську та в області
        </p>
        <p className="text-3xl max-md:text-xl text-black font-semibold mb-8 pb-2">Під ключ від 530 грн/м²</p>

        <AdvantageBlock />

        <div className="mt-16 mb-4">
          <PhoneButton />
        </div>

        <div className="flex justify-center mt-8 mb-8">
          <Image src={manImage} alt="Man" width={400} height={400} className="object-contain" />
        </div>
      </div>
    </section>
  );
};
