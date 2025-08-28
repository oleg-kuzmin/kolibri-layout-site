import cn from 'classnames';
import styles from './Image.module.scss';

interface ImageProps {
  className?: string;
}

export function Image({ className }: Readonly<ImageProps>) {
  return (
    <img
      className={cn(styles.image, className)}
      src="/kolibri-layout-site/images/vitalik.png"
      alt="Vitalik Buterin"
      srcSet="
        /kolibri-layout-site/images/vitalik-mobile_1x.png 345w, 
        /kolibri-layout-site/images/vitalik-mobile_2x.png 690w, 
        /kolibri-layout-site/images/vitalik-mobile_3x.png 1035w, 
        /kolibri-layout-site/images/vitalik-desktop_1x.png 625w,
        /kolibri-layout-site/images/vitalik-desktop_2x.png 1250w,
        /kolibri-layout-site/images/vitalik-desktop_3x.png 1875w"
      sizes="
        (width <= 768px) 345px,
        625px"
    />
  );
}
