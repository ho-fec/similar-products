import React, { Component } from 'react';
import styles from './ModalContainer.css';
import ModalImage from '../ModalImage';
import ModalInfo from '../ModalInfo';
import ModalBottomLeft from '../ModalBottomLeft';
import ModalBottomRight from '../ModalBottomRight';
import Close from './Close.jsx';

class Modal extends Component {
  constructor(props) {
    super(props);
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
                  onClick={ () => this.props.onClose() }
                />
              </button>
            </div>
          </div>
        </div>
      </div>
        <div
          onClick={ () => this.props.onClose() }
          className={ styles.bg }>
        </div>
      </div>
    );
  }
}

export default Modal;