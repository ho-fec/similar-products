import React from 'react';
import Carousel from './Carousel.jsx';
import styles from '../css/App.css';

const App = () => (
  <div className={ styles.box }>
    <div className={ styles.title } >Similar Products</div>
    <div className={ styles.box }>
      <Carousel />
    </div>
    {/* <Select /> */}
  </div>
);

export default App;