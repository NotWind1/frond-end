import {useState,useEffect} from 'react'
import styles from './index.less';

const h = 24;
const m = 60;
const s = 60;

export default function CountDown() {
    const [count, setCount] = useState(h * m * s);
    const [hour, setHour] = useState(24);
    const [min, setMin] = useState(0);
    const [second, setSecond] = useState(0);
  
    useEffect(() => {
      if (count !== 0) {
        setTimeout(() => {
          setCount(count - 1);
        }, 1000);
        setHour(parseInt(`${(count / 60 / 60) % 24}`));
        setMin(parseInt(`${(count / 60) % 60}`));
        setSecond(parseInt(`${count % 60}`));
      }
    }, [count]);
  
return <div className={styles.timer1}>Ends in <span>{hour}</span> h <span>{min}</span> m <span>{second}</span> s </div>
}
