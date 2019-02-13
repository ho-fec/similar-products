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
        id='1'
        className={ styles.slideButton }
        onClick={ (e) => this.props.click(e) }
        disabled={ this.props.dL }>
          <div className={ styles.circle }></div>
        </button>
        <button
        type='button'
        id='2'
        className={ styles.slideButton }
        onClick={ (e) => this.props.click(e) }
        disabled={ this.props.dM }>
          <div className={ styles.circle }></div>
        </button>
        <button
        type='button'
        id='3'
        className={ styles.slideButton }
        onClick={ (e) => this.props.click(e) }
        disabled={ this.props.dR }>
          <div className={ styles.circle }></div>
        </button>
      </div>
    );
  }
}

export default Bottom;