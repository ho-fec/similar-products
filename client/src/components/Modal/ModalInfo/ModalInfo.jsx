import React, { Component } from 'react';
import styles from './ModalInfo.css';

class ModalInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const oz = (ml) => {
      return (ml * 0.033814).toFixed(1);
    }

    return (
      <div className={ styles.productInfo }>
        <div className={ styles.productNameContainer }>
        <span className={ styles.category }>{ this.props.category }</span>
        <span className={ styles.name }>{ this.props.name }</span>
        </div>
        <div className={ styles.sizeSKU }>
          <span>
            SIZE { oz(this.props.size) } oz/ { this.props.size }mL
            <span className={ styles.bullet }>•</span>
            </span>
            ITEM { this.props.sku }
        </div>
        <div className={ styles.description }>
          <div className={ styles.descriptionText }>
            { this.props.description }
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
    );
  }
}

export default ModalInfo;