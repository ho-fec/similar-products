import React from 'react';
import styles from '../css/CarouselItem.css';
import star from '../assets/carousel-star.svg';
import love from '../assets/love.svg';

const Entry = props => (
  <div className={ styles.entry }>
    <div className={ styles.itemContainer }>
      <img className={ styles.item } src={ props.item } />
    <button className={ styles.loveButton }>
      <img className={ styles.love } src={ love } />
    </button>
    </div>
    <div className={ styles.name }>
      <div className={ styles.category }>
      {props.category}
      </div>
      <div className={ styles.productName }>
      {props.name}
      </div>
      <div className={ styles.price }>
      {props.price}
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

export default Entry;