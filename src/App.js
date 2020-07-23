import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }){
  return ( 
    <div>
      <h2>I like { name }</h2>
      <h2>{rating}/5.0</h2>
      <img src={picture} alt={name}/>
    </div>
    )
}

const foodILike = [
  {
    id : 1,
    name : 'pizza',
    image : 'https://www.recipetineats.com/wp-content/uploads/2020/05/Pepperoni-Pizza_7.jpg',
    rating : 5
  },
  {
    id : 2,
    name : 'samgyeopsal',
    image : 'https://image.chosun.com/sitedata/image/201902/24/2019022401106_0.jpg',
    rating : 4.5
  },
  {
    id : 3,
    name : 'kimchi',
    image : 'https://www.bgw.kr/wp-content/uploads/2019/12/%EC%88%98%EC%9E%85%EA%B9%80%EC%B9%98.png',
    rating : 3
  }
];

function App() {
  return ( 
  <div>
  {foodILike.map(dish => (
  <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
  ))}
  </div>
  )
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.string.isRequired,
};

export default App;
