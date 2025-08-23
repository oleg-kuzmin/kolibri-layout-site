import cn from 'classnames';
import { ContentTitle, ViewCounter } from '@/shared/ui';
import { Avatar } from './Avatar';
import { DateArticle } from './DateArticle';
import { Image } from './Image';
import { MainTitle } from './MainTitle';
import { TimeRead } from './TimeRead';
import styles from './MainArticle.module.scss';

interface MainArticleProps {
  className?: string;
}

export function MainArticle({ className }: Readonly<MainArticleProps>) {
  return (
    <article className={cn(styles.mainArticle, className)}>
      <Image className={styles.mainArticle__image} />
      <ContentTitle className={styles.mainArticle__contentTitle}>[ articles ]</ContentTitle>
      <MainTitle className={styles.mainArticle__mainTitle}>
        / Vitalik Buterin and His Father, Dima Buterin, Gave a Big Interview →
      </MainTitle>

      <Avatar className={styles.mainArticle__mobileAvatar} />

      <div className={styles.mainArticle__footer}>
        <Avatar className={styles.mainArticle__tabletAvatar} />
        <ViewCounter className={styles.mainArticle__viewCounter} />
        <div className={styles.mainArticle__timeInfo}>
          <DateArticle />
          <TimeRead />
        </div>
      </div>
    </article>
  );
}
