import React from 'react';

function Food({ name, picture }){
return ( 
  <div>
    <h2>I like { name }</h2>
    <img src={picture} />
  </div>
)
  }

const foodILike = [
  {
    name : 'pizza',
    image : 'https://www.recipetineats.com/wp-content/uploads/2020/05/Pepperoni-Pizza_7.jpg'
  },
  {
    name : 'samgyeopsal',
    image : 'https://image.chosun.com/sitedata/image/201902/24/2019022401106_0.jpg'
  },
  {
    name : 'kimchi',
    image : 'https://www.bgw.kr/wp-content/uploads/2019/12/%EC%88%98%EC%9E%85%EA%B9%80%EC%B9%98.png'
  }
];

function App() {
  return ( 
  <div>
  { foodILike.map(dish => (
    <Food name={dish.name} picture={dish.image}/>
      ) 
    ) }
  </div>
  )
}

export default App;
