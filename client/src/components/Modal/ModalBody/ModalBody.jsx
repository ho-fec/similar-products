import React from 'react';
import styles from './ModalBody.css';
import ModalImage from '../ModalImage';
import ModalBottomLeft from '../ModalBottomLeft';
import ModalBottomRight from '../ModalBottomRight';

function ModalBody(props) {
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
            <div className={ styles.descriptionText }>
              { props.description }
            </div>
            <div className={ styles.productLinkContainer }>
              <span className={ styles.productLink }>
                See product details
              </span>
            </div>
          </div>
          <div className={ styles.variationText }>
          </div>
          <div className={ styles.variationBox }>
          </div>
        </div>
      </div>
      <div className={ styles.flexBot }>
        <ModalBottomLeft
        stars={ props.stars }
        reviews={ props.reviews }
        loves={ props.loves }
        exclusive={ props.exclusive }/>
        <ModalBottomRight price={ props.price }/>
      </div>
    </div>
  );
}

export default ModalBody;