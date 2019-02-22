import React, { Component } from 'react';
import styles from './ModalInfo.css';
import { randomNumberInt } from '../../../../../database/helpers.js';


class ModalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      single: true,
      selected: '0',
      hovered: false,
      hoverIndex: '0',
      variationSKU: this.props.sku,
      selectSKU: '',
      random: ''
    }
    this.selectSize = this.selectSize.bind(this);
    this.onHover = this.onHover.bind(this);
    this.resetSelect = this.resetSelect.bind(this);
  }

  componentDidMount() {
    if (this.props.size.length > 1) {
      this.setState({ single: false });
    }
  }

  selectSize(e) {
    this.setState({
      selected: e.target.id,
      selectSKU: this.state.random
    });
  }

  onHover(e) {
    this.setState({
      hovered: true,
      hoverIndex: e.target.id
    });

    if (e.target.id === '0') {
      this.setState({
        variationSKU: this.props.sku
      });
    } else if (e.target.id !== this.state.selected) {
      let random = randomNumberInt(1000000, 2000000);
      this.setState({
        variationSKU: random,
        random: random
      });
    }
  }

  resetSelect(e) {
    if (this.state.selected === '0') {
      this.setState({
        hovered: false,
        variationSKU: this.props.sku
      });
    } else {
      this.setState({
        hovered: false,
        variationSKU: this.state.selectSKU
      });
    }
  }

  render() {
    const oz = (ml) => {
      return (ml * 0.033814).toFixed(1);
    }

    let { selected, single, hovered, hoverIndex, variationSKU } = this.state;

    let sizeSpan;
    if (!hovered) {
      sizeSpan = <span>SIZE { oz(this.props.size[selected]) } oz/ { this.props.size[selected] } mL
        <span className={ styles.bullet }>•</span></span>;
    }

    let variationSize;
    if (!single && !hovered) {
      variationSize = <span className={ styles.variationText }>
        SIZE { oz(this.props.size[selected]) } oz/ { this.props.size[selected] } mL
      </span>
    } else if (!single && hovered) {
      variationSize = <span className={ styles.variationText }>
        SIZE { oz(this.props.size[hoverIndex]) } oz/ { this.props.size[hoverIndex] } mL
      </span>
    }

    return (
      <div className={ styles.productInfo }>
        <div className={ styles.productNameContainer }>
        <span className={ styles.category }>{ this.props.category }</span>
        <span className={ styles.name }>{ this.props.name }</span>
        </div>
        <div className={ styles.sizeSKU }>
          <span>
            { single ? sizeSpan : '' }
            </span>
            ITEM { variationSKU }
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
        { variationSize }
        <div className={ single ? styles.hidden : styles.variationBox }>
          <div className={ styles.variationWrapper }>
            {this.props.size.map((item, i) => {
              return (
                <div
                key={ i }
                className={ styles.variationItem }>
                  <button
                  id={ i }
                  className={ item === this.props.size[selected] ? styles.variationButtonSelect : styles.variationButton }
                  onMouseEnter={ this.onHover }
                  onMouseLeave={ this.resetSelect }
                  >
                    <div
                    id={ i }
                    className={ styles.buttonContent }
                    onClick={ this.selectSize }
                    >
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