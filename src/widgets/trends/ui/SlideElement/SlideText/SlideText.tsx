import cn from 'classnames';
import styles from './SlideText.module.scss';

interface SlideTextProps {
  children: React.ReactNode;
  className?: string;
}

export function SlideText({ children, className }: Readonly<SlideTextProps>) {
  return <p className={cn(styles.slideText, className)}>{children}</p>;
}
