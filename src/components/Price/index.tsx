import { priceData } from './data';
import { PriceCard } from './PriceCard';

export const Price = () => {
  return (
    <section id="price" className="bg-white relative w-full overflow-hidden">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl max-md:text-3xl font-bold text-orange mb-4 relative border-b-4 border-orange pb-2">
          Ціни
        </h1>
        <p className="text-xl max-md:text-[16px] text-black font-semibold mt-6 mb-8 pb-2">
          Від 530 грн/м² з урахуванням матеріалів. Пропонуємо знижки на великі обсяги робіт та для постійних клієнтів.
        </p>
      </div>

      <div className="flex justify-center items-center w-full">
        <div
          className={`flex gap-4 px-4 justify-center items-center ${priceData.length === 1 ? 'md:w-[50%]' : 'md:flex-row w-full'}`}
        >
          {priceData.map((item, index) => (
            <PriceCard key={index} title={item.title} description={item.description} prices={item.prices} />
          ))}
        </div>
      </div>
    </section>
  );
};
