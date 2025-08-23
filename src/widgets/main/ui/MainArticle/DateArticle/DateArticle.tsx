import cn from 'classnames';
import styles from './DateArticle.module.scss';

interface DateArticleProps {
  className?: string;
}

export function DateArticle({ className }: Readonly<DateArticleProps>) {
  return <span className={cn(styles.dateArticle, className)}>13 Nov, 2022 </span>;
}
