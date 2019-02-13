import React from 'react';
import styles from './Bottom.css';

export default (props) => (
  <div className={ styles.bottom }>

    <button
    type='button'
    className={ styles.slideButton }
    onClick={ () => props.click(0) }
    disabled={ props.dL }>
      <div className={ styles.circle }></div>
    </button>

    <button
    type='button'
    className={ styles.slideButton }
    onClick={ () => props.click(1) }
    disabled={ props.dM }>
      <div className={ styles.circle }></div>
    </button>

    <button
    type='button'
    className={ styles.slideButton }
    onClick={ () => props.click(2) }
    disabled={ props.dR }>
      <div className={ styles.circle }></div>
    </button>

  </div>
);