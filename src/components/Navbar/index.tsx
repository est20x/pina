'use client';

import Link from 'next/link';
import { useState } from 'react';

import { useIsMobile } from '@/hooks/useIsMobile';
import LogoPhoto from '../../../assets/logo.svg';
import { navItems } from './data';
import { HamburgerButton } from './HamburgerButton';
import { HamburgerMenu } from './HamburgerMenu';
import { PhoneNumberButton } from './PhoneNumberButton';

export const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-start px-4 py-4 bg-black">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <LogoPhoto className="w-12 h-12 rounded-full" />
          </Link>
        </div>
        {!isMobile ? (
          <div className="flex space-x-4 ml-8">
            {navItems.map(({ link, title }) => (
              <Link key={link} href={link} className="relative text-white transition-all duration-300 hover:scale-105">
                {title}
              </Link>
            ))}
          </div>
        ) : (
          <>
            <div className="flex-grow" />
            <HamburgerButton isOpen={isOpen} onToggle={handleToggle} />
            <HamburgerMenu isOpen={isOpen} onClose={handleClose} />
          </>
        )}
        <div className="hidden lg:flex ml-auto space-x-4">
          <PhoneNumberButton />
        </div>
      </nav>
    </header>
  );
};
