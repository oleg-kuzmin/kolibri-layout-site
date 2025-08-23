import cn from 'classnames';
import styles from './Line.module.scss';

interface LineProps {
  className?: string;
}

export function Line({ className }: Readonly<LineProps>) {
  return <div className={cn(styles.line, className)}></div>;
}
