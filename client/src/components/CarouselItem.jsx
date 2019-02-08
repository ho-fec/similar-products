import React from 'react';
import styles from '../css/CarouselItem.css'

const Entry = props => (
  <div className={ styles.item }>
    <div className={ styles.image }>
      <img className ={styles.item} src={props.item} />
    </div>
    <div className={ styles.name }>
      <div>Category name</div>
      <div>Product name</div>
    </div>
    <div className={ styles.price }></div>
    <div className={ styles.stars }></div>
  </div>
)

export default Entry;