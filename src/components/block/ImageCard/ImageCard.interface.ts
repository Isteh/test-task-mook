import { LinkProps } from 'react-router-dom';

export interface IImageCardProps extends LinkProps {
  img: string;
  title: string;
  className?: string;
}
