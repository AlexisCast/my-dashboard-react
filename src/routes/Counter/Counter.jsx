import { useState } from 'react';
import styles from './Counter.module.css';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className={styles.Counter}>
      <span>Counter</span>
      <span className={styles.Value}>{counter}</span>
      <div className={styles.Buttons}>
        <button className={styles.Button} onClick={() => setCounter((prevState) => prevState + 1)}>
          +1
        </button>
        <button className={styles.Button} onClick={() => setCounter((prevState) => prevState - 1)}>
          -1
        </button>
      </div>
    </div>
  );
};

export default Counter;
