import React from 'react';
import CarouselItem from './CarouselItem.jsx';
import styles from '../css/Carousel.css';
import lArrow from '../assets/left-arrow.svg';
import rArrow from '../assets/right-arrow.svg';
import axios from 'axios';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      list: []
    }
  }

  // 'https://sephora.com/productimages/sku/s1897487-main-grid.jpg',
  //     'https://sephora.com/productimages/sku/s1897495-main-grid.jpg',
  //     'https://sephora.com/productimages/sku/s487694-main-grid.jpg',
  //     'https://sephora.com/productimages/sku/s1217710-main-grid.jpg',
  //     'https://sephora.com/productimages/sku/s1835420-main-grid.jpg'

  componentDidMount() {
    axios
      .get('/item')
      .then(({ data }) => this.setState({ list: [...data] }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className={ styles.outerContainer }>
        <button className={ styles.button }>
          <img className={ styles.arrow } src={lArrow} />
        </button>
        <div className={ styles.innerContainer }>
        {this.state.list.map((item, i) =>
        <CarouselItem
        key={i}
        item={item.image}
        name={ item.product_name }
        category={ item.category } />)}
        </div>
        <button className={ styles.button }>
          <img className={ styles.arrow } src={rArrow} />
        </button>
      </div>
    )
  }
}

export default Carousel;