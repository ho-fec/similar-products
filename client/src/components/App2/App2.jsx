import React from 'react';
import Carousel2 from '../Carousel2';
import styles from './App2.css';

const App2 = () => (
  <div className={ styles.box }>
    <div className={ styles.titleWrapper }>
      <div className={ styles.title }>
        You May Also Like
      </div>
    </div>
    <Carousel2 />
  </div>
);

export default App2;