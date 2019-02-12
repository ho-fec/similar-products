import React, { Component } from 'react';
import styles from './Bottom.css';

class Bottom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ styles.bottom }>
        <button
        type='button'
        className={ styles.slideButton }
        disabled={ false }>
          <div className={ styles.circle }></div>
        </button>
        <button
        type='button'
        className={ styles.slideButton }
        disabled={ false}>
          <div className={ styles.circle }></div>
        </button>
        <button
        type='button'
        className={ styles.slideButton }
        disabled={false}>
          <div className={ styles.circle }></div>
        </button>
      </div>
    );
  }
}

export default Bottom;