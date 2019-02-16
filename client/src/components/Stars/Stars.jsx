import React from 'react';
import styles from './Stars.css';
import Star from './Star.jsx';

const Stars = ({ stars }) => (
  <div className={ styles.ratings }>
    <div>
      <Star className={ styles.star }/>
      <Star className={ styles.star }/>
      <Star className={ styles.star }/>
      <Star className={ styles.star }/>
      <Star className={ styles.star }/>
    </div>
    <div className={ styles.overlay } style={{ width: `${stars/5 * 100}%` }}>
      <Star className={ styles.star }/>
      <Star className={ styles.star }/>
      <Star className={ styles.star }/>
      <Star className={ styles.star }/>
      <Star className={ styles.star }/>
    </div>
  </div>
);

export default Stars;