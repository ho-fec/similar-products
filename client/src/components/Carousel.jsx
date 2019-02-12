import React from 'react';
import CarouselItem from './CarouselItem.jsx';
import styles from '../css/Carousel.css';
import ArrowL from './ArrowL.jsx';
import ArrowR from './ArrowR.jsx';
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
    let disabledL, disabledR = false;

    if (scroll === 0) {
      disabledL = true;
    } else if (scroll === 1) {
      move = styles.r1;
    } else if (scroll === 2) {
      disabledR = true;
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
          disabled={ disabledL }>
            {/* <img className={ styles.arrow } src={ ArrowL } /> */}
            <ArrowL viewBox={ "0 0 16 32" } className={ styles.arrow }/>
          </button>

          <button
          className={ styles.buttonR }
          onClick={ this.clickRight }
          disabled ={ disabledR }>
            {/* <img className={ styles.arrow } src={ ArrowR } /> */}
            <ArrowR viewBox={ "0 0 16 32" } className={ styles.arrow }/>
          </button>
        </div>
      </div>
    )
  }
}

export default Carousel;