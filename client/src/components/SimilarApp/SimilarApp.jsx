import React from 'react';
import Carousel from '../Carousel';
import styles from './SimilarApp.css';

const SimilarApp = props => (
  <>
    <div className={ styles.divider }></div>
    <div className={ styles.box }>
      <div className={ styles.titleWrapper }>
        <div className={ styles.title }>
          Similar Products
        </div>
      </div>
      <Carousel id={ props.id }/>
    </div>
  </>
);

export default SimilarApp;