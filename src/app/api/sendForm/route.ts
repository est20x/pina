import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { Name, Number } = await req.json();
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json(
      { status: 'error', message: 'Telegram integration is not configured.' },
      { status: 500 }
    );
  }

  const message = `
    💁🏻‍♂ Name: ${Name}
📱 Phone number: ${Number}
  `;

  const sendMessageUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
    message
  )}`;

  try {
    const response = await fetch(sendMessageUrl);

    if (response.ok) {
      return NextResponse.json({ status: 'success' });
    }

    return NextResponse.json({ status: 'error', message: 'Не вдалось надіслати форму.' }, { status: 500 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { status: 'error', message: 'Під час надсилання форми сталася помилка.' },
      { status: 500 }
    );
  }
}
