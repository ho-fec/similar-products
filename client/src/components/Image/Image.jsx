import React from 'react';
import styles from './Image.css';

export default ({ item }) => (
  <div className={ styles.imageContainer1 }>
    <div className={ styles.imageContainer2 }>
      <img className={ styles.image } src={ item }/>
    </div>
  </div>
);