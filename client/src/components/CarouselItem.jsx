import React from 'react';
import styles from '../css/CarouselItem.css';
import star from '../assets/carousel-star.svg';
import love from '../assets/love.svg';

class Entry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ styles.entry }>
        <div className={ styles.itemContainer }>
          <img className={ styles.item } src={ this.props.item } />

        <button
        className={ styles.loveButton }
>
          <img className={ styles.love } src={ love } />
        </button>

        </div>
        <div className={ styles.name }>

          <div className={ styles.category }>
          {this.props.category}
          </div>
          <div className={ styles.productName }>
          {this.props.name}
          </div>
          <div className={ styles.price }>
          {this.props.price}

          </div>
        </div>
        <div className={ styles.starContainer }>

          <img className={ styles.star } src={ star } />
          <img className={ styles.star } src={ star } />
          <img className={ styles.star } src={ star } />
          <img className={ styles.star } src={ star } />
          <img className={ styles.star } src={ star } />

        </div>
      </div>
    );
  }
}

export default Entry;