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
      scroll: 0
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
    if (this.state.scroll > 0) {
      this.setState({ scroll: this.state.scroll - 1 });
    }
  }

  clickRight(e) {
    if (this.state.scroll < 2) {
      this.setState({ scroll: this.state.scroll + 1 });
    }
  }

  render() {
    let { scroll } = this.state;
    let move = styles.innerContainer;
    let disabled = false;

    if (scroll === 0) {
      disabled = true;
    } else if (scroll === 1) {
      move = styles.r1;
    } else if (scroll === 2) {
      move = styles.r2;
    } 

    return (
      <div className={ styles.outerWrapper }>
        <div className={ styles.innerWrapper }>
          <div className={ styles.outerContainer }>
            <div className={ move } >
              {this.state.list.map((item, i) =>
              <CarouselItem
                key={ i }
                item={ item.image }
                name={ item.product_name }
                category={ item.category }
                price={ item.price } />)}
            </div>
          </div>

          <button
          className={ styles.buttonL }
          onClick={ this.clickLeft }
          disabled={ disabled }>
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

