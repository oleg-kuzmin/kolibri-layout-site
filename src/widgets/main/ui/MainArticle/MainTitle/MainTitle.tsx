import cn from 'classnames';
import styles from './MainTitle.module.scss';

interface MainTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function MainTitle({ children, className }: Readonly<MainTitleProps>) {
  return <h2 className={cn(styles.mainTitle, className)}>{children}</h2>;
}
