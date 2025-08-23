import cn from 'classnames';
import styles from './SlideImage.module.scss';

interface SlideImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function SlideImage({ src, alt, className }: Readonly<SlideImageProps>) {
  return <img className={cn(styles.slideImage, className)} src={src} alt={alt}></img>;
}
