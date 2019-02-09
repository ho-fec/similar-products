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
      position: 0
    }
  }

  componentDidMount() {
    axios
      .get('/item')
      .then(({ data }) => this.setState({ list: [...data] }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className={ styles.wrapper }>
        <button className={ styles.button }>
          <img className={ styles.arrow } src={ lArrow } />
        </button>
        <div className={ styles.innerContainer }>
          {this.state.list.map((item, i) =>
          <CarouselItem
            key={ i }
            item={ item.image }
            name={ item.product_name }
            category={ item.category }
            price={ item.price } />)}
        </div>
        <button className={ styles.button }>
          <img className={ styles.arrow } src={ rArrow } />
        </button>
      </div>
    )
  }
}

export default Carousel;

