import cn from 'classnames';
import { ElementText, ElementTitle, ViewCounter } from '@/shared/ui';
import { ArticleImage } from './ArticleImage';
import styles from './ArticleElement.module.scss';

interface ArticleElementProps {
  src: string;
  alt: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ArticleElement({ src, alt, title, children, className }: Readonly<ArticleElementProps>) {
  return (
    <li className={cn(styles.articleElement, className)}>
      <ArticleImage className={styles.articleElement__image} src={src} alt={alt} />
      <div className={styles.articleElement__header}>
        <ElementTitle>{title}</ElementTitle>
        <ViewCounter />
      </div>
      <ElementText>{children}</ElementText>
    </li>
  );
}
