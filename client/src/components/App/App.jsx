import React from 'react';
import Carousel from '../Carousel';
import styles from './App.css';

const App = () => (
  <div className={ styles.box }>
    <div className={ styles.titleWrapper }>
      <div className={ styles.title }>
        Similar Products
      </div>
    </div>
    <Carousel />
  </div>
);

export default App;