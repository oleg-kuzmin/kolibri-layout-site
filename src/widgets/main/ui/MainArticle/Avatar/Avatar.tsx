import cn from 'classnames';
import styles from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
}

export function Avatar({ className }: Readonly<AvatarProps>) {
  return (
    <div className={cn(styles.avatar, className)}>
      <div className={styles.avatar__image}></div>
      <span className={styles.avatar__name}>Ivan Sokolov</span>
    </div>
  );
}
