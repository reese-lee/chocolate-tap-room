import React from 'react';
import Drinks from './Drinks';

const availableDrinks = [
  {
    name: 'The Lucy Liu',
    brand: 'House',
    price: '$6.99',
    flavor: 'Spicy Milk Chocolate',
    description: 'Our popular, old-fashioned milk chocolate with a kick of jalapeno and chili spices.'
  },
  {
    name: 'The Old-Fashioned',
    brand: 'House',
    price: '$4.99',
    flavor: 'Milk Chocolate',
    description: "The original recipe that started in Grandma's kitchen, and built us into a nationwide chocolate force."
  },
  {
    name: 'The Herb Garden',
    brand: 'House',
    price: '$6.99',
    flavor: 'Earthy and herby',
    description: 'Made with thyme, rosemary, and oregano, this one is straight from the backyard!'
  }
]

export default function DrinksList() {
  return (
    <div>
      {availableDrinks.map((drinks, index)=>
        <Drinks name={drinks.name}
        brand={drinks.brand}
        price={drinks.price}
        flavor={drinks.flavor}
        description={drinks.description}
        key={index}/>
      )}
    </div>
  )
}
