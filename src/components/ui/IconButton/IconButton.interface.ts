import { ButtonHTMLAttributes } from 'react';

export interface IIconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  text: string;
  className?: string;
}
