import cn from 'classnames';
import styles from './NewsImage.module.scss';

interface NewsImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function NewsImage({ src, alt, className }: Readonly<NewsImageProps>) {
  return <img className={cn(styles.newsImage, className)} src={src} alt={alt}></img>;
}
