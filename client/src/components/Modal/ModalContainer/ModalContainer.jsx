import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './ModalContainer.css';
import ModalBody from '../ModalBody';
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
        <div className={ styles.container1 }>
          <div className={ styles.container2 }>
            <div className={ styles.dialog }>
            <div className={styles.box}></div>
              <ModalBody />
              <button
              className={ styles.closeButton }
              onClick={ e => this.props.onClose(e) }>
                <Close className={ styles.closeSVG } viewBox={ '0 0 17 17' }/>
              </button>
            </div>
          </div>
          <div className={ styles.bg }></div>
        </div>,
        this.modalElement)
    );
  }
}

export default Modal;