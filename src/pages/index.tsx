import { grop, group, maskGroup, maskGroup2, off, group2, img, background, enjoy } from '../public/imgs'
import { useRef, useState, useEffect } from 'react';
import CountDown from '../components/CountDown';
import styles from './index.less';


export default function IndexPage() {

  const [showLongBox, setShowLongBox] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setShowLongBox(width <= 768)
  }, [width])

  const onWidthChange = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    onWidthChange();
    window.addEventListener('resize', onWidthChange);
    return () => window.removeEventListener('resize', onWidthChange);
  }, [])

  return (
    <div>
      {
        !showLongBox ? (
          <div className={styles.main}>
            <div className={styles.left}>
              <img src={maskGroup} className={styles.girl} />
              <img src={group} className={styles.tip} />
            </div>

            <div className={styles.right}>
              <div className={styles.timer}>
                <CountDown />
              </div>
              <img src={grop} className={styles.tip1} />
            </div>
          </div>
        ) : (
            <div className={styles.main1}>
              <div className={styles.left1}>
                <img src={enjoy} className={styles.tip2} />
                <img src={off} className={styles.tip3} />
                <div className={styles.timer1}>
                  <CountDown />
                </div>
                <div className={styles.right1}>
                  <img src={img} className={styles.girl1} />
                  <img src={background} className={styles.background} />
                  <img src={group2} className={styles.ground2} />
                </div>
              </div>
            </div>
          )
      }
    </div>
  );

}
