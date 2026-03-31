import { motion } from 'framer-motion';
import Link from 'next/link';

import { IHamburgerMenu } from '@/components/types';
import { navItems } from './data';
import { PhoneNumberButton } from './PhoneNumberButton';

export const HamburgerMenu: React.FC<IHamburgerMenu> = ({ isOpen, onClose }) =>
  isOpen ? (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed top-0 left-0 bottom-0 w-full h-full bg-black flex flex-col items-end p-6 z-40"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="w-full flex flex-col items-end space-y-6 mt-12 text-right">
        {navItems.map(({ link, title }) => (
          <Link key={link} href={link} className="text-xl text-white" onClick={onClose}>
            {title}
          </Link>
        ))}
        <div className="mt-auto space-y-4 text-right" onClick={onClose}>
          <PhoneNumberButton />
        </div>
      </div>
    </motion.div>
  ) : null;
