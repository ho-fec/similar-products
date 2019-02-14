import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './ModalContainer.css';
import ModalImage from '../ModalImage';
import ModalInfo from '../ModalInfo';
import ModalBottomLeft from '../ModalBottomLeft';
import ModalBottomRight from '../ModalBottomRight';
import Close from './Close.jsx';

const modalRoot = document.getElementById('modal');

class Modal extends Component {
  constructor(props) {
    super(props);
    this.modalElement = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.modalElement);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.modalElement);
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      createPortal(
        <>
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
                    price={ this.props.price }
                    />
                  </div>
                </div>

                <button
                className={ styles.closeButton }
                onClick={ e => this.props.onClose(e) }>
                  <Close
                  className={ styles.closeSVG }
                  viewBox={ '0 0 17 17' }/>
                </button>
              </div>
            </div>
          </div>
          <div className={ styles.bg }></div>
        </>,
        this.modalElement)
    );
  }
}

export default Modal;