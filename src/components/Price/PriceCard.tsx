import { PriceItemProps } from '../types';

export const PriceCard: React.FC<PriceItemProps> = ({ title, description, prices }) => {
  return (
    <div className="bg-darkGray border border-orange rounded-lg p-4  md:flex-1 h-[250px]">
      <h3 className="text-2xl font-bold text-orange mb-2">{title}</h3>
      <p className="text-white mb-4">{description}</p>
      <ul className="text-white">
        {prices.map((price, index) => (
          <li key={index}>
            {price.range} — {price.cost}
          </li>
        ))}
      </ul>
    </div>
  );
};
