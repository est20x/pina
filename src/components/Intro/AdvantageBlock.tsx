import { advantages } from './data';

export const AdvantageBlock = () => {
  return (
    <ul className="advantage-item text-white font-medium grid gap-4 sm:grid-cols-1 md:grid-cols-3 my-5 max-md:my-0">
      {advantages.map((item, index) => (
        <li
          key={index}
          className="relative p-4 text-orange rounded-lg transition-all duration-300 transform 
                     md:hover:scale-105 md:hover:bg-orange md:hover:text-black 
                     overflow-hidden border-2 border-orange"
        >
          <div className="absolute inset-0 w-full h-full" />
          <span className="relative flex items-center justify-center h-full">{item}</span>
        </li>
      ))}
    </ul>
  );
};
