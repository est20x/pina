import { TbPhoneCall } from 'react-icons/tb';

export const PhoneNumberButton = () => {
  return (
    <div className="group">
      <a
        href="tel:+380993895704"
        className="group-hover:border-orange px-4 py-2 rounded-lg flex items-center space-x-2 border border-white bg-gray-200/20 transition-all duration-300"
      >
        <TbPhoneCall className="text-green-500" />
        <span className="text-sm text-white group-hover:text-orange">Телефонуйте</span>
      </a>
    </div>
  );
};
