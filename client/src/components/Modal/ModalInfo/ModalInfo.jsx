import React, { Component } from 'react';
import styles from './ModalInfo.css';

class ModalInfo extends Component {
  constructor(props) {
    super(props);
    this.state ={
      single: true,
      selected: 0
    }
    this.selectSize = this.selectSize.bind(this);
  }

  componentDidMount() {
    if (this.props.size.length > 1) {
      this.setState({ single: false });
    }
  }

  selectSize(e) {
    console.log(e.target.name);
    this.setState({ selected: Number(e.target.name) });
  }

  render() {
    const oz = (ml) => {
      return (ml * 0.033814).toFixed(1);
    }

    let { selected } = this.state;
    let sizeSpan = <span>SIZE { oz(this.props.size[selected]) } oz/ { this.props.size[selected] } mL
    <span className={ styles.bullet }>•</span></span>;

    return (
      <div className={ styles.productInfo }>
        <div className={ styles.productNameContainer }>
        <span className={ styles.category }>{ this.props.category }</span>
        <span className={ styles.name }>{ this.props.name }</span>
        </div>
        <div className={ styles.sizeSKU }>
          <span>
            { this.state ? sizeSpan : '' }
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
        <div className={ this.state.single ? styles.hidden : styles.variationText }>
        SIZE { oz(this.props.size[selected]) } oz/ { this.props.size[selected] } mL
        </div>
        <div className={ this.state.single ? styles.hidden : styles.variationBox }>
          <div className={ styles.variationWrapper }>
            {this.props.size.map((item, i) => {
              return (
                <div
                key={ i }
                className={ styles.variationItem }>
                  <button
                  name={ `${i}` }
                  className={ styles.variationButton }
                  onClick={ this.selectSize }>
                    <div className={ styles.buttonContent }>
                      { oz(item) } oz/ { item } mL
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ModalInfo;