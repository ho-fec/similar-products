import React from 'react';
import styles from '../css/CarouselItem.css'
import star from '../assets/carousel-star.svg';

const Entry = props => (
  <div>
    <div className={ styles.image }>
      <img className ={styles.item} src={props.item} />
    </div>
    <div className={ styles.name }>
      <div>Category name</div>
      <div>Product name</div>
    </div>
    <div className={ styles.price }>
      <div>$4.20</div>
    </div>
    <div className={ styles.starContainer }>
      <img className={ styles.star } src={star} />
      <img className={ styles.star } src={star} />
      <img className={ styles.star } src={star} />
      <img className={ styles.star } src={star} />
      <img className={ styles.star } src={star} />
    </div>
  </div>
)

export default Entry;