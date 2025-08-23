import cn from 'classnames';
import styles from './TrendTitle.module.scss';

interface TrendTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function TrendTitle({ children, className }: Readonly<TrendTitleProps>) {
  return <h2 className={cn(styles.trendTitle, className)}>{children}</h2>;
}
