import Link from 'next/link';

export const Logo: React.FC = () => (
  <Link
    href="/"
    className="text-white font-bold text-lg lg:text-xl lg:hover:text-orange-500 lg:transition-transform lg:transform lg:hover:scale-110"
  >
    Pina <span className="text-orange">Pro</span>
  </Link>
);
