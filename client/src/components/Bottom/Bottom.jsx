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
        onClick={ () => this.props.click(0) }
        disabled={ this.props.dL }>
          <div className={ styles.circle }></div>
        </button>
        <button
        type='button'
        className={ styles.slideButton }
        onClick={ () => this.props.click(1) }
        disabled={ this.props.dM }>
          <div className={ styles.circle }></div>
        </button>
        <button
        type='button'
        className={ styles.slideButton }
        onClick={ () => this.props.click(2) }
        disabled={ this.props.dR }>
          <div className={ styles.circle }></div>
        </button>
      </div>
    );
  }
}

export default Bottom;