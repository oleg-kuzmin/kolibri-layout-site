import cn from 'classnames';
import { Content } from '@/shared/ui';
import { Articles } from './Articles';
import { LatestNews } from './LatestNews';
import { MainArticle } from './MainArticle';
import styles from './Main.module.scss';

interface MainProps {
  className?: string;
}

export function Main({ className }: Readonly<MainProps>) {
  return (
    <main className={cn(styles.main, className)}>
      <Content className={styles.main__content}>
        <MainArticle />
        <LatestNews />
        <Articles />
      </Content>
    </main>
  );
}
