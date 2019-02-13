import React from 'react';
import styles from './ModalBody.css';
import ModalImage from '../ModalImage';

function ModalBody(props) {
  return (
    <div className={ styles.box }>
      <div className={ styles.flexTop }>
        <ModalImage item={ props.item } badge={ props.badge }/>
        <div className={ styles.productInfo }>
        </div>
      </div>
      <div className={ styles.flexBot }></div>
    </div>
  );
}

export default ModalBody;