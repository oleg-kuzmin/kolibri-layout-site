import cn from 'classnames';
import styles from './ElementTitle.module.scss';

interface ElementTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function ElementTitle({ children, className }: Readonly<ElementTitleProps>) {
  return <span className={cn(styles.elementTitle, className)}>{children}</span>;
}
