import cn from 'classnames';
import { ContentTitle } from '@/shared/ui';
import { NewsElement } from './NewsElement';
import styles from './LatestNews.module.scss';

interface LatestNewsProps {
  className?: string;
}

export function LatestNews({ className }: Readonly<LatestNewsProps>) {
  return (
    <div className={cn(styles.latestNews, className)}>
      <ContentTitle className={styles.latestNews__contentTitle}>[ latest news ]</ContentTitle>
      <ul className={styles.latestNews__list}>
        <NewsElement src="/kolibri-layout-site/images/news-1.png" alt="Новость 1" title="16 Nov, 2022">
          Abu Dhabi Launches New Index to Help Private Sector Adopt to Industry 4.0
        </NewsElement>
        <NewsElement src="/kolibri-layout-site/images/news-2.png" alt="Новость 2" title="16 Nov, 2022">
          e& Looks to Launch Food Delivery Service
        </NewsElement>
        <NewsElement src="/kolibri-layout-site/images/news-3.png" alt="Новость 3" title="16 Nov, 2022" className={styles.latestNews__news3}>
          UAE's Rashid Rover to Go to Moon on 28 November
        </NewsElement>
        <NewsElement src="/kolibri-layout-site/images/news-4.png" alt="Новость 4" title="ADV">
          {`New iPhone 14 Pro\nPro. Beyond.`}
        </NewsElement>
        <NewsElement src="/kolibri-layout-site/images/news-5.png" alt="Новость 5" title="16 Nov, 2022">
          Abu Dhabi Launches New Index to Help Private Sector Adopt to Industry 4.0
        </NewsElement>
        <NewsElement src="/kolibri-layout-site/images/news-6.png" alt="Новость 6" title="16 Nov, 2022">
          Abu Dhabi Launches New Index to Help Private Sector Adopt to Industry 4.0
        </NewsElement>
      </ul>
    </div>
  );
}
