import cn from 'classnames';
import styles from './ContentTitle.module.scss';

interface ContentTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function ContentTitle({ children, className }: Readonly<ContentTitleProps>) {
  return <span className={cn(styles.contentTitle, className)}>{children}</span>;
}
