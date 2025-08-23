import { createContext, useContext, useRef, useState } from 'react';
import { Swiper, type SwiperClass, type SwiperProps, SwiperSlide } from 'swiper/react';
import cn from 'classnames';
import 'swiper/swiper-bundle.css';
import styles from './Slider.module.scss';

interface Context {
  swiperRef: React.RefObject<SwiperClass | null>;
  slidesLength: number;
  activeSlide: number;
  progress: {
    isBeginning: boolean;
    isEnd: boolean;
  };
  swiperConfig: SwiperProps;
}

const SliderContext = createContext<Context>({} as Context);

//# Slider
interface SliderProps {
  swiperConfig: SwiperProps;
  slides: React.ReactElement[];
  childrenPosition?: 'prepend' | 'append';
  classNameContainer?: string;
  classNameSwiper?: string;
  classNameSlide?: string;
  children?: React.ReactNode;
}

export function Slider({
  swiperConfig,
  slides,
  childrenPosition = 'append',
  classNameContainer,
  classNameSwiper,
  classNameSlide,
  children,
}: Readonly<SliderProps>) {
  const [activeSlide, setActiveSlide] = useState(swiperConfig.initialSlide || 0);
  const [progress, setProgress] = useState({ isBeginning: true, isEnd: false });
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <SliderContext value={{ swiperRef, slidesLength: slides.length, activeSlide, swiperConfig, progress }}>
      <div className={cn(styles.sliderFullPage, classNameContainer)}>
        {childrenPosition === 'prepend' ? children : null}
        <Swiper
          {...swiperConfig}
          className={cn(styles.sliderFullPage__swiper, classNameSwiper)}
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
          onSlideChange={swiper => {
            setProgress({ isBeginning: swiper.isBeginning, isEnd: swiper.isEnd });
            setActiveSlide(swiper.realIndex);
          }}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className={classNameSlide}>
              {slide}
            </SwiperSlide>
          ))}
        </Swiper>
        {childrenPosition === 'append' ? children : null}
      </div>
    </SliderContext>
  );
}

//# ButtonNext
interface ButtonNextProps {
  className: string;
  children?: React.ReactNode;
}

function ButtonNext({ className, children }: Readonly<ButtonNextProps>) {
  const { swiperRef, swiperConfig, progress } = useContext(SliderContext);

  function handleClickNext() {
    if (swiperRef) {
      swiperRef.current?.slideNext();
    }
  }

  return (
    <button className={className} onClick={handleClickNext} disabled={!swiperConfig.loop && progress.isEnd}>
      {children}
    </button>
  );
}

//# ButtonPrev
interface ButtonPrevProps {
  className: string;
  children?: React.ReactNode;
}

function ButtonPrev({ className, children }: Readonly<ButtonPrevProps>) {
  const { swiperRef, swiperConfig, progress } = useContext(SliderContext);

  function handleClickPrev() {
    if (swiperRef) {
      swiperRef.current?.slidePrev();
    }
  }

  return (
    <button className={className} onClick={handleClickPrev} disabled={!swiperConfig.loop && progress.isBeginning}>
      {children}
    </button>
  );
}

//# Pagination
interface PaginationProps {
  classContainer: string;
  classBullet: string;
  classActiveBullet: string;
}

function Pagination({ classContainer, classBullet, classActiveBullet }: Readonly<PaginationProps>) {
  const { slidesLength, activeSlide } = useContext(SliderContext);

  function bulletMap(_: React.ReactElement, index: number) {
    return <div className={cn(classBullet, { [classActiveBullet]: index === activeSlide })} key={index}></div>;
  }

  const bulletElements = Array.from({ length: slidesLength ?? 0 }, bulletMap);

  return <div className={classContainer}>{bulletElements}</div>;
}

Slider.ButtonNext = ButtonNext;
Slider.ButtonPrev = ButtonPrev;
Slider.Pagination = Pagination;
