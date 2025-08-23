import cn from 'classnames';
import { Content, Slider } from '@/shared/ui';
import { swiperConfig } from '../config';
import type { SlideTrend } from '../model';
import { Line } from './Line';
import { SlideElement } from './SlideElement';
import { TrendTitle } from './TrendTitle';
import styles from './Trends.module.scss';

interface TrendsProps {
  className?: string;
}

const slides: SlideTrend[] = [
  {
    id: '1',
    src: '/kolibri-layout-site/images/slide-1.png',
    alt: 'Слайд 1',
    section: '[ articles ]',
    date: '16 Nov, 2022',
    text: '"The machine has won and we have to use it" — Professional Artists about AI-Generated Arts',
  },
  {
    id: '2',
    src: '/kolibri-layout-site/images/slide-2.png',
    alt: 'Слайд 2',
    section: '[ articles ]',
    date: '16 Nov, 2022',
    text: 'In Netherlands Bitcoin Mining is Used to Grow Tulips',
  },
  {
    id: '3',
    src: '/kolibri-layout-site/images/slide-3.png',
    alt: 'Слайд 3',
    section: 'ADV',
    text: 'New iPhone 14 Pro\nPro. Beyond.',
  },
  {
    id: '4',
    src: '/kolibri-layout-site/images/slide-1.png',
    alt: 'Слайд 1',
    section: '[ articles ]',
    date: '16 Nov, 2022',
    text: '"The machine has won and we have to use it" — Professional Artists about AI-Generated Arts',
  },
  {
    id: '5',
    src: '/kolibri-layout-site/images/slide-2.png',
    alt: 'Слайд 2',
    section: '[ articles ]',
    date: '16 Nov, 2022',
    text: 'In Netherlands Bitcoin Mining is Used to Grow Tulips',
  },
  {
    id: '6',
    src: '/kolibri-layout-site/images/slide-3.png',
    alt: 'Слайд 3',
    section: 'ADV',
    text: 'New iPhone 14 Pro\nPro. Beyond.',
  },
  {
    id: '7',
    src: '/kolibri-layout-site/images/slide-1.png',
    alt: 'Слайд 1',
    section: '[ articles ]',
    date: '16 Nov, 2022',
    text: '"The machine has won and we have to use it" — Professional Artists about AI-Generated Arts',
  },
  {
    id: '8',
    src: '/kolibri-layout-site/images/slide-2.png',
    alt: 'Слайд 2',
    section: '[ articles ]',
    date: '16 Nov, 2022',
    text: 'In Netherlands Bitcoin Mining is Used to Grow Tulips',
  },
  {
    id: '9',
    src: '/kolibri-layout-site/images/slide-3.png',
    alt: 'Слайд 3',
    section: 'ADV',
    text: 'New iPhone 14 Pro\nPro. Beyond.',
  },
];

const slideElements = slides?.map(slide => <SlideElement slide={slide} key={slide.id} />) ?? [];

export function Trends({ className }: Readonly<TrendsProps>) {
  return (
    <section className={cn(styles.trends, className)}>
      <Content>
        <Slider
          swiperConfig={swiperConfig}
          slides={slideElements}
          classNameSlide={styles.trends__slide}
          childrenPosition="prepend">
          <div className={styles.trends__header}>
            <TrendTitle>Trending now ↓</TrendTitle>
            <div className={styles.trends__buttons}>
              <Slider.ButtonPrev className={cn(styles.trends__button, styles.trends__button_prev)} />
              <Line />
              <Slider.ButtonNext className={cn(styles.trends__button, styles.trends__button_next)} />
            </div>
            <div className={cn(styles.trends__line, styles.trends__line_first)}></div>
            <div className={cn(styles.trends__line, styles.trends__line_second)}></div>
          </div>
        </Slider>
      </Content>
    </section>
  );
}
