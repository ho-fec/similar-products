import React from 'react';
import styles from './Image.css';

export default ({ image }) => (
  <div className={ styles.imageContainer1 }>
    <div className={ styles.imageContainer2 }>
      <img className={ styles.image } src={ image }/>
    </div>
  </div>
);