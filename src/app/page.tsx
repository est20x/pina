import Head from 'next/head';

import { AboutUs } from '@/components/AboutUs';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/Form';
import { Intro } from '@/components/Intro';
import { Navbar } from '@/components/Navbar';
import { Options } from '@/components/Options';
import { OurWorks } from '@/components/OurWorks';
import { Price } from '@/components/Price';
import { Tools } from '@/components/Tools';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pina Pro</title>
        <meta name="description" content="" />
      </Head>
      <div className="overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Navbar />
          <Intro />
          <Price />
          <AboutUs />
          <Options />
          <Tools />
          <OurWorks />
          <ContactForm />
        </div>
        <Footer />
      </div>
    </>
  );
}
