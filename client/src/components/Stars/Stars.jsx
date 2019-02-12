import React from 'react';
import styles from './Stars.css';
import Star from './Star.jsx';

const Stars = ({ stars }) => (
  <div className={ styles.ratings }>
    <div>
      <Star className={ styles.star } viewBox={ "0 0 32 32" }/>
      <Star className={ styles.star } viewBox={ "0 0 32 32" }/>
      <Star className={ styles.star } viewBox={ "0 0 32 32" }/>
      <Star className={ styles.star } viewBox={ "0 0 32 32" }/>
      <Star className={ styles.star } viewBox={ "0 0 32 32" }/>
    </div>
    <div className={ styles.overlay } style={{ width: `${stars/5 * 100}%` }}>
      <Star className={ styles.star } viewBox={ "0 0 32 32" }/>
      <Star className={ styles.star } viewBox={ "0 0 32 32" }/>
      <Star className={ styles.star } viewBox={ "0 0 32 32" }/>
      <Star className={ styles.star } viewBox={ "0 0 32 32" }/>
      <Star className={ styles.star } viewBox={ "0 0 32 32" }/>
    </div>
  </div>
);

export default Stars;