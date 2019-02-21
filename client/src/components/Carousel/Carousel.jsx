import React, { Component } from 'react';
import CarouselItem from '../CarouselItem';
import styles from './Carousel.css';
import ArrowL from './ArrowL.jsx';
import ArrowR from './ArrowR.jsx';
import Bottom from '../Bottom';
import axios from 'axios';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      scroll: 0
    }
    this.clickBottom = this.clickBottom.bind(this);
    this.clickLeft = this.clickLeft.bind(this);
    this.clickRight = this.clickRight.bind(this);
  }

  componentDidMount() {
    let id = 1;
    axios
      .get(`/similar/${id}`)
      .then(({ data }) => {this.setState({ list: [...data] })})
      .catch(err => console.log(err))
  }

  clickBottom(num) {
    this.setState({ scroll: num });
  }
  
  clickLeft(e) {
    this.setState({ scroll: this.state.scroll - 1 });
  }

  clickRight(e) {
    this.setState({ scroll: this.state.scroll + 1 });
  }

  render() {
    let { scroll } = this.state;
    let move = styles.innerContainer;

    if (scroll === 1) {
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
                name={ item.product_name }
                category={ item.category }
                size={ item.size }
                description={ item.description }
                sku={ item.sku }
                stars={ item.stars }
                reviews={ item.reviews }
                badge={ item.badge }
                loves={ item.loves }
                exclusive={ item.exclusive }
                online={ item.online_only }
                limited={ item.limited_edition }
                free={ item.free_shipping }
                price={ item.price }
                image={ item.image }
                />)}
            </div>
          </div>

          <button
          className={ styles.buttonL }
          onClick={ this.clickLeft }
          disabled={ scroll === 0 }>
            <ArrowL className={ styles.arrow }/>
          </button>
          <button
          className={ styles.buttonR }
          onClick={ this.clickRight }
          disabled={ scroll === 2 }>
            <ArrowR className={ styles.arrow }/>
          </button>

        </div>
        <Bottom
        disabledL={ scroll === 0 }
        disabledM={ scroll === 1 }
        disabledR={ scroll === 2 }
        click={ this.clickBottom }/>
      </div>
    )
  }
}

export default Carousel;