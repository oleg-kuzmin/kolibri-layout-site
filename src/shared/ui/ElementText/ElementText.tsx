import cn from 'classnames';
import styles from './ElementText.module.scss';

interface ElementTextProps {
  children: React.ReactNode;
  className?: string;
}

export function ElementText({ children, className }: Readonly<ElementTextProps>) {
  return <p className={cn(styles.elementText, className)}>{children}</p>;
}
