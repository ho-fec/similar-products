import React, { Component } from 'react';
import styles from './ModalContainer.css';
import ModalImage from '../ModalImage';
import ModalInfo from '../ModalInfo';
import ModalBottomLeft from '../ModalBottomLeft';
import ModalBottomRight from '../ModalBottomRight';
import Close from './Close.jsx';
import { randomNumberInt, randomNumberDec } from '../../../../../database/helpers.js';


class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '0',
      hovered: false,
      hoverIndex: '0',
      variationSKU: this.props.sku,
      selectSKU: null,
      random: null,
      selectPrice: this.props.price,
      tempPrice: null,
      newPrice: null
    }
    this.selectSize = this.selectSize.bind(this);
    this.onHover = this.onHover.bind(this);
    this.resetSelect = this.resetSelect.bind(this);
  }

  selectSize(e) {
    if (e.target.id !== '0') {
      this.setState({
        selected: e.target.id,
        selectSKU: this.state.random,
        selectPrice: this.state.newPrice,
        tempPrice: this.state.newPrice
      });
    } else {
      this.setState({
        selected: e.target.id,
        selectSKU: this.state.random,
        selectPrice: this.props.price
      });
    }
  }

  onHover(e) {
    this.setState({
      hovered: true,
      hoverIndex: e.target.id
    });

    if (e.target.id === '0') {
      this.setState({
        variationSKU: this.props.sku,
        selectPrice: this.props.price
      });
    } else if (e.target.id !== this.state.selected) {
      let randomSKU = randomNumberInt(1000000, 2000000);
      let priceNum = this.props.price.slice(1);
      let newPrice = `$${ (priceNum * this.props.size[e.target.id] / this.props.size[0]).toFixed(2) }`;
      this.setState({
        variationSKU: randomSKU,
        random: randomSKU,
        selectPrice: newPrice,
        newPrice: newPrice
      });
    }
  }

  resetSelect(e) {
    if (this.state.selected === '0') {
      this.setState({
        hovered: false,
        variationSKU: this.props.sku,
        selectPrice: this.props.price
      });
    } else {
      this.setState({
        hovered: false,
        variationSKU: this.state.selectSKU,
        selectPrice: this.state.tempPrice
      });
    }
  }

  render() {
    return (
      <div
        id='modal1'
        style={this.props.show ? {} : { display: 'none' }}
      >
      <div>
        
        <div className={ styles.container1 }>
          <div className={ styles.container2 }>
            <div className={ styles.dialog }>
              <div className={ styles.box }>
                <div className={ styles.flexTop }>
                  <ModalImage
                    image={ this.props.image }
                    badge={ this.props.badge }
                  />
                  <ModalInfo
                    selectSize={ this.selectSize }
                    onHover={ this.onHover }
                    resetSelect={ this.resetSelect }
                    selected={ this.state.selected }
                    hovered={ this.state.hovered }
                    hoverIndex={ this.state.hoverIndex }
                    variationSKU={ this.state.variationSKU }

                    name={ this.props.name }
                    category={ this.props.category }
                    size={ this.props.size }
                    description={ this.props.description }
                    sku={ this.props.sku }
                  />
                </div>
                <div className={ styles.flexBot }>
                  <ModalBottomLeft
                    loved={ this.props.loved }
                    stars={ this.props.stars }
                    reviews={ this.props.reviews }
                    loves={ this.props.loves }
                    exclusive={ this.props.exclusive }
                    online={ this.props.online }
                    limited={ this.props.limited }
                  />
                  <ModalBottomRight
                    loved={ this.props.loved }
                    handleLove={ this.props.handleLove }
                    free={ this.props.free }
                    price={ this.state.selectPrice }
                  />
                </div>
              </div>

              <button
                className={ styles.closeButton }
                onClick={ e => this.props.onClose(e) }>
                <Close
                  className={ styles.closeSVG }
                  onClick={ () => this.props.onClose(null) }
                />
              </button>
            </div>
          </div>
        </div>
      </div>
        <div
          className={ styles.bg }
        >
        </div>
      </div>
    );
  }
}

export default Modal;