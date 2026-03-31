import { TbPhoneCall } from 'react-icons/tb';

export const PhoneButton = () => {
  return (
    <div className="flex justify-center">
      <a
        href="tel:+380993895704"
        className="px-10 py-5 rounded-xl flex items-center space-x-3 border border-orange bg-black text-lg font-semibold text-white group transition-all duration-500 ease-in-out hover:bg-orange hover:text-black"
      >
        <TbPhoneCall className="text-green-500 animate-pulse text-2xl" />
        <span className="group-hover:text-black animate-pulse">Телефонуйте</span>
      </a>
    </div>
  );
};
