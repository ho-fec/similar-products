import React from 'react';
import styles from './ModalBody.css';

function ModalBody(props) {
  return (
    <div className={ styles.box }>
      <div className={ styles.flexTop }>
        <div className={ styles.imageContainer1 }>
          <div className={ styles.imageContainer2 }>
            <div className={ styles.imageContainer3 }>
              <img src={ props.item }/>
            </div>

            <div
            className={ styles.badgeContainer }
            style={ props.badge ? { opacity: 1 } : { opacity: 0 } }>
              <div className={ styles.badge }>New</div>
            </div>

          </div>
        </div>
        <div className={ styles.productInfo }>
        </div>
      </div>
      <div className={ styles.flexBot }></div>
    </div>
  );
}

export default ModalBody;