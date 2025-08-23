import cn from 'classnames';
import styles from './Image.module.scss';

interface ImageProps {
  className?: string;
}

export function Image({ className }: Readonly<ImageProps>) {
  return <img className={cn(styles.image, className)} src="/kolibri-layout-site/images/vitalik.png" alt="Vitalik Buterin"></img>;
}
