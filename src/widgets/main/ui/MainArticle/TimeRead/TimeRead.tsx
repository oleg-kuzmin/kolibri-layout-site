import cn from 'classnames';
import styles from './TimeRead.module.scss';

interface TimeReadProps {
  className?: string;
}

export function TimeRead({ className }: Readonly<TimeReadProps>) {
  return (
    <div className={cn(styles.timeRead, className)}>
      <div className={styles.timeRead__icon}></div>
      <span className={styles.timeRead__text}>9 min time to read</span>
    </div>
  );
}
