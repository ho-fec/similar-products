import React from 'react';
import CarouselItem from './CarouselItem.jsx';
import styles from '../css/Carousel.css';
import lArrow from '../assets/left-arrow.svg';
import rArrow from '../assets/right-arrow.svg';
import axios from 'axios';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      move: false
    }
    this.clickLeft = this.clickLeft.bind(this);
    this.clickRight = this.clickRight.bind(this);
  }

  componentDidMount() {
    axios
      .get('/item')
      .then(({ data }) => this.setState({ list: [...data] }))
      .catch(err => console.log(err))
  }
  
  clickLeft(e) {
    this.setState({ move: true });
  }

  clickRight(e) {
    this.setState({ move: true });
  }

  render() {
    let { move } = this.state;

    return (
      <div className={ styles.outerWrapper }>
        <div className={ styles.innerWrapper }>
          <div className={ styles.outer }>
            <div className={ styles.inner }>
              {this.state.list.map((item, i) =>
              <CarouselItem
                key={ i }
                item={ item.image }
                name={ item.product_name }
                category={ item.category }
                price={ item.price } />)}
            </div>
          </div>

          <button className={ styles.buttonL } onClick={ this.clickRight } >
            <img className={ styles.arrow } src={ lArrow } />
          </button>

          <button className={ styles.buttonR } onClick={ this.clickRight } >
            <img className={ styles.arrow } src={ rArrow } />
          </button>
        </div>
      </div>
    )
  }
}

export default Carousel;

