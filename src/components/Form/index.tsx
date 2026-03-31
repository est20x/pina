'use client';

import { useState } from 'react';

import Logo from '../../../assets/logo.svg';
import { PhoneButton } from '../Intro/PhoneButton';

export const ContactForm: React.FC = () => {
  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
  const [formData, setFormData] = useState({
    Name: '',
    Number: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formEndpoint) {
      setError('Форма тимчасово недоступна. Налаштуйте зовнішній endpoint для відправки.');
      return;
    }

    try {
      setError(null);

      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError('Не вдалося надіслати форму. Спробуйте пізніше.');
      }
    } catch (err) {
      setError('Не вдалося надіслати форму. Спробуйте пізніше.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="max-w-2xl mx-auto p-8 bg-orange rounded-md mt-32">
        <Logo className="w-32 h-32 mb-6 mx-auto rounded-full" />
        <h2 className="text-black text-3xl font-bold mb-6 text-center">Залиште свою заявку</h2>

        <p className="text-black mb-6 text-center text-sm">Наш спеціаліст зв'яжеться з вами найближчим часом.</p>

        {!submitted ? (
          <form className="space-y-6 flex flex-col items-center" onSubmit={handleSubmit}>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              placeholder="Ваше ім'я"
              className="border-b-2 border-orange-600 bg-transparent text-black rounded-none px-4 py-2 w-full focus:outline-none focus:border-orange-400 transition-all duration-300"
              required
            />
            <input
              type="tel"
              name="Number"
              value={formData.Number}
              onChange={handleChange}
              placeholder="Ваш номер телефону"
              className="border-b-2 border-orange-600 bg-transparent text-black rounded-none px-4 py-2 w-full focus:outline-none focus:border-orange-400 transition-all duration-300"
              required
            />
            <button className="w-full max-w-xs h-12 rounded-full flex justify-center items-center border-4 border-black hover:bg-black transition-all duration-300 text-white text-sm">
              Відправити
            </button>
          </form>
        ) : (
          <p className="text-black text-lg text-center mt-4">
            Дякуємо за відправлення заявки! Ми зв'яжемося з вами найближчим часом.
          </p>
        )}

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        <p className="text-black text-xs mt-6 text-center">
          Залишаючи свої контактні дані в цій формі, ви даєте свою згоду на обробку персональних даних.
        </p>
      </div>
      <div className="mt-8 mb-16">
        <PhoneButton />
      </div>
    </>
  );
};
