import React from 'react';
import Carousel2 from '../Carousel2';
import styles from './LikeApp.css';

const LikeApp = props => (
  <>
    <div className={ styles.divider }></div>
    <div className={ styles.box }>
      <div className={ styles.titleWrapper }>
        <div className={ styles.title }>
          You May Also Like
        </div>
      </div>
      <Carousel2 id={ props.id }/>
    </div>
    <div className={ styles.divider }></div>
  </>
);

export default LikeApp;