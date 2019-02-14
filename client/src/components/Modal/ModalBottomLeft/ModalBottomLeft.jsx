import React, { Component } from 'react';
import styles from './ModalBottomLeft.css';
import Stars from '../../Stars';

class ModalBottomLeft extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ styles.container }>
        <div className={ styles.upper }>
          <div className={ styles.reviewContainer }>
            <div className={ styles.starContainer }>
              <Stars stars={ this.props.stars }/>
            </div>
            <span className={ styles.reviews }>
              { this.props.reviews } reviews
            </span>
          </div>
          <div className={ styles.line }></div>
          <span>
            <span className={ styles.love }>
              <svg className={ styles.loveIcon } viewBox="0 0 32 26" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <path d="M16.003 26c-.915 0-1.772-.354-2.417-1L2.364 13.78C.84 12.254 0 10.228 0 8.07 0 3.078 4.153-.012 8-.012c2.225 0 4.223.822 5.778 2.377L16 4.586l2.222-2.222C19.777.81 21.775-.013 24-.013c3.848 0 8 3.09 8 8.084 0 2.157-.84 4.184-2.364 5.708L18.413 25c-.643.645-1.5 1-2.41 1z"></path>
              </svg>
            </span>
            <span className={ styles.loveCount }>
              { this.props.loves }
            </span> loves
          </span>
        </div>
        <div className={ styles.lower }>
        <span>{ this.props.exclusive ? 'exclusive' : '' }</span>
        </div>
      </div>
    );
  }
}

export default ModalBottomLeft;