import cn from 'classnames';
import styles from './ArticleImage.module.scss';

interface ArticleImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ArticleImage({ src, alt, className }: Readonly<ArticleImageProps>) {
  return <img src={src} alt={alt} className={cn(styles.articleImage, className)}></img>;
}
