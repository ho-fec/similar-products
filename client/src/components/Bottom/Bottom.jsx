import React from 'react';
import styles from './Bottom.css';

export default (props) => (
  <div className={ styles.bottom }>

    <button
    type='button'
    className={ styles.slideButton }
    onClick={ () => props.click(0) }
    disabled={ props.disabledL }>
      <div className={ styles.circle }></div>
    </button>

    <button
    type='button'
    className={ styles.slideButton }
    onClick={ () => props.click(1) }
    disabled={ props.disabledM }>
      <div className={ styles.circle }></div>
    </button>

    <button
    type='button'
    className={ styles.slideButton }
    onClick={ () => props.click(2) }
    disabled={ props.disabledR }>
      <div className={ styles.circle }></div>
    </button>

  </div>
);