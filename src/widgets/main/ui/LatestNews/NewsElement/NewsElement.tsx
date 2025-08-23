import cn from 'classnames';
import { ElementText, ElementTitle } from '@/shared/ui';
import { NewsImage } from './NewsImage';
import styles from './NewsElement.module.scss';

interface NewsElementProps {
  src: string;
  alt: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function NewsElement({ src, alt, title, children, className }: Readonly<NewsElementProps>) {
  return (
    <li className={cn(styles.newsElement, className)}>
      <NewsImage src={src} alt={alt} />

      <div className={styles.newsElement__info}>
        <ElementTitle>{title}</ElementTitle>
        <ElementText>{children}</ElementText>
      </div>
    </li>
  );
}
