import React from 'react';
import Carousel from '../Carousel';
import styles from './App2.css';

const App2 = () => (
  <div className={ styles.box }>
    <div className={ styles.titleWrapper }>
      <div className={ styles.title }>
        You May Also Like
      </div>
    </div>
    <Carousel />
  </div>
);

export default App2;