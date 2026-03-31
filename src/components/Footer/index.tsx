import { Logo } from '../Navbar/Logo';
import { footerItems } from './data';

export const Footer = () => {
  return (
    <footer className="mt-8 border-t border-gray-400 bg-black pt-4 pb-2 lg:px-5">
      <div className="flex flex-col sm:space-y-4 lg:flex-row lg:justify-between lg:space-x-8 lg:space-y-0">
        <div className="py-4 text-center lg:mx-auto lg:w-1/4 lg:text-left">
          <Logo />
        </div>

        <div className="flex flex-col items-center space-y-2 py-4 lg:w-1/4 lg:items-start">
          <h3 className="text-lg text-white">Приступимо до роботи?</h3>
          <p className="text-white">+380993895704</p>
          <a href="https://pina-pro.com" className="text-white transition hover:text-orange">
            pina-pro.com
          </a>
        </div>

        <div className="flex flex-col items-center space-y-2 py-4 lg:w-1/4 lg:items-start">
          {footerItems.map((item, index) => (
            <a key={index} href={item.link} className="text-white transition hover:text-orange">
              {item.title}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-white">
        <p>
          ©{' '}
          <a href="https://nexel.digital" className="underline hover:text-orange">
            NEXEL
          </a>{' '}
          2024
        </p>
      </div>
    </footer>
  );
};
