import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { Name, Number } = await req.json();

  // Створюємо повідомлення для Telegram
  const token = '7525103795:AAHUGaoPIF48qBXZGwc1QilmE4ucH0L_Z98'; // Ваш токен Telegram
  const chat_id = '-1002295248471'; // Ваш чат ID
  const message = `
    💁🏻‍♂ Name: ${Name}
📱 Phone number: ${Number}
  `;

  const sendMessageUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(
    message
  )}`;

  try {
    const response = await fetch(sendMessageUrl);

    if (response.ok) {
      return NextResponse.json({ status: 'success' });
    } else {
      return NextResponse.json({ status: 'error', message: 'Не вдалось надіслати форму.' }, { status: 500 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { status: 'error', message: 'Під час надсилання форми сталася помилка.' },
      { status: 500 }
    );
  }
}
