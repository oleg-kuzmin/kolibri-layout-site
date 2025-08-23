import cn from 'classnames';
import { ContentTitle } from '@/shared/ui';
import { ArticleElement } from './ArticleElement';
import styles from './Articles.module.scss';

interface ArticlesProps {
  className?: string;
}

export function Articles({ className }: Readonly<ArticlesProps>) {
  return (
    <div className={cn(styles.articles, className)}>
      <ContentTitle className={styles.articles__contentTitle}>[ articles ]</ContentTitle>
      <ul className={styles.articles__list}>
        <ArticleElement src="/kolibri-layout-site/images/article-1.png" alt="Статья 1" title="16 Nov, 2022">
          Leonid Dovbenko: We Compete with the Strongest Companies on Planet
        </ArticleElement>
        <ArticleElement src="/kolibri-layout-site/images/article-2.png" alt="Статья 2" title="16 Nov, 2022">
          Leonid Dovbenko: We Compete with the Strongest Companies on Planet
        </ArticleElement>
        <ArticleElement src="/kolibri-layout-site/images/article-3.png" alt="Статья 3" title="16 Nov, 2022">
          Leonid Dovbenko: We Compete with the Strongest Companies on Planet
        </ArticleElement>
      </ul>
    </div>
  );
}
