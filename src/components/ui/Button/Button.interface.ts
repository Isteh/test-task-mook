import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  theme?: BUTTON_THEMES;
}

export enum BUTTON_THEMES {
  ACCENT = 'accent',
  BORDERED = 'bordered',
}
