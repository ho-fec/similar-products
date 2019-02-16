import React, { Component } from 'react';
import styles from './ModalBottomLeft.css';
import ModalLove from './ModalLove.jsx';
import Stars from '../../Stars';

class ModalBottomLeft extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { loves, exclusive, online, limited } = this.props;
    if (loves > 1000) {
      loves = Math.round(loves / 1000) + 'K';
    }

    let bullet = <span className={ styles.bullet }>·</span>;

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
              <ModalLove className={ styles.loveIcon } />
            </span>
            <span className={ styles.loveCount }>
              { this.props.loved ? (loves[loves.length - 1] === 'K' ? loves : loves + 1) : loves }
            </span> loves
          </span>
        </div>
        <div className={ styles.lower }>
          <span>
          { exclusive ? 'exclusive' : '' }
          { (exclusive && online) || (exclusive && limited) ? bullet : '' }
          { online ? 'online only' : '' }
          { online && limited ? bullet : '' }
          { limited ? 'limited edition' : '' }
          </span>
        </div>
      </div>
    );
  }
}

export default ModalBottomLeft;