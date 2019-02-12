import React from 'react';
import styles from './CarouselItem.css';
import Image from '../Image';
import star from '../../assets/carousel-star.svg';
import love from '../../assets/love.svg';

class Entry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ styles.entry }>
        <div className={ styles.itemContainer1 }>
          <div className={ styles.itemContainer2 }>
            <div className={ styles.itemContainer3 }>
              <Image item={ this.props.item } />
              <button className={ styles.loveButton }>
                <img className={ styles.love } src={ love }/>
              </button>
            </div>

            <div className={ styles.name }>
              <span className={ styles.category }>
                {this.props.category}
              </span>
              <br />
              <span>
                {this.props.name}
              </span>
              <div className={ styles.price }>
                {this.props.price}
              </div>
            </div>

            <div className={ styles.starContainer }>

              <img className={ styles.star } src={ star }/>
              <img className={ styles.star } src={ star }/>
              <img className={ styles.star } src={ star }/>
              <img className={ styles.star } src={ star }/>
              <img className={ styles.star } src={ star }/>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Entry;