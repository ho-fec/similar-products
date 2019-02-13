import React from 'react';
import styles from './ModalBody.css';

function ModalBody(props) {
  return (
    <div className={ styles.box }>
      <div className={ styles.flexTop }>
        <div className={ styles.imageContainer1 }>
        hi
        </div>
        <div className={ styles.productInfo }>
        </div>
      </div>
      <div className={ styles.flexBot }></div>
    </div>
  );
}

export default ModalBody;