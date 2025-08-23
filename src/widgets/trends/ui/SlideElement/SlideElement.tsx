import cn from 'classnames';
import { ContentTitle, ElementTitle, ViewCounter } from '@/shared/ui';
import type { SlideTrend } from '../../model';
import { SlideImage } from './SlideImage';
import { SlideText } from './SlideText';
import styles from './SlideElement.module.scss';

interface SlideElementProps {
  slide: SlideTrend;
  className?: string;
}

export function SlideElement({ slide, className }: Readonly<SlideElementProps>) {
  const { src, alt, section, date, text } = slide;

  return (
    <div className={cn(styles.slideElement, className)}>
      <SlideImage className={styles.slideElement__image} src={src} alt={alt} />

      <div className={styles.slideElement__header}>
        <ContentTitle className={styles.slideElement__contentTitle}>{section}</ContentTitle>
        {date && <ElementTitle>{date}</ElementTitle>}
        <ViewCounter className={styles.slideElement__viewCounter} />
      </div>

      <SlideText>{text}</SlideText>
    </div>
  );
}
