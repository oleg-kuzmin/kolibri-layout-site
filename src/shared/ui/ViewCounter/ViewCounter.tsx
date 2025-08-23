import cn from 'classnames';
import styles from './ViewCounter.module.scss';

interface ViewCounterProps {
  className?: string;
}

export function ViewCounter({ className }: Readonly<ViewCounterProps>) {
  return (
    <div className={cn(styles.viewCounter, className)}>
      <div className={styles.viewCounter__icon}></div>
      <span className={styles.viewCounter__text}>679</span>
    </div>
  );
}
