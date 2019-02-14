import React from 'react';
import styles from './ModalBody.css';
import ModalImage from '../ModalImage';

function ModalBody(props) {
  console.log(props);
  const oz = (ml) => {
    return (ml * 0.033814).toFixed(1);
  }

  return (
    <div className={ styles.box }>
      <div className={ styles.flexTop }>
        <ModalImage image={ props.image } badge={ props.badge }/>
        <div className={ styles.productInfo }>
          <div className={ styles.productNameContainer }>
          <span className={ styles.category }>{ props.category }</span>
          <span className={ styles.name }>{ props.name }</span>
          </div>
          <div className={ styles.sizeSKU }>
            <span>
              SIZE { oz(props.size) } oz/ { props.size }mL
              <span className={ styles.bullet }>•</span>
              </span>
              ITEM {props.sku}
          </div>
          <div className={ styles.description }>
          </div>
          <div className={ styles.variationText }>
          </div>
          <div className={ styles.variationBox }>
          </div>
        </div>
      </div>
      <div className={ styles.flexBot }></div>
    </div>
  );
}

export default ModalBody;