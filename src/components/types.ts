import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export interface IHamburgerButton {
  isOpen: boolean;
  onToggle: () => void;
}

export interface IHamburgerMenu {
  isOpen: boolean;
  onClose: () => void;
}

export interface ButtonProps {
  link: string;
  text: string;
}

export interface IconData {
  icon: IconType;
  name: string;
}

export interface GradientSectionProps {
  children: ReactNode;
}

export interface CardProps {
  number: string;
  title: string;
  description: string;
}

export interface CardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
}

export interface CardProps {
  title: string;
  description: string;
}

export type PriceItemProps = {
  title: string;
  description: string;
  prices: { range: string; cost: string }[];
};

export type LottieAnimationProps = {
  animationPath: string;
  width?: number;
  height?: number;
};
