import React from 'react';
import Drinks from './Drinks';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const availableDrinks = [
  {
    name: 'The Lucy Liu',
    price: '$6.99',
    flavor: 'Spicy Milk Chocolate',
    pints: '124',
    description: 'Our popular, old-fashioned milk chocolate with a kick of jalapeno and chili spices.'
  },
  {
    name: 'The Old-Fashioned',
    price: '$4.99',
    flavor: 'Milk Chocolate',
    pints: '124',
    description: "The original recipe that started in Grandma's kitchen, and built us into a nationwide chocolate force."
  },
  {
    name: 'The Herb Garden',
    price: '$6.99',
    flavor: 'Earthy and herby',
    pints: '124',
    description: 'Made with thyme, rosemary, and oregano, this one is straight from the backyard!'
  }
]

const useStyles = makeStyles ({
  text: {
    display: 'flex',
    border: '1px solid black',
    justifyContent: 'spaceBetween'
  },
  title: {
    textAlign: 'center',
    fontSize: '4em',
    color: '#36d9a0'
  }
})

export default function DrinksList() {
  const classes = useStyles();
  return (
    <div>
      <div style={{fontFamily: 'DM Serif Display'}}>
        <div className={classes.title}>
        Our Offerings
        </div>
        <div className={classes.text}>
          {availableDrinks.map((drinks, index)=>
            <Drinks name={drinks.name}
            price={drinks.price}
            flavor={drinks.flavor}
            pints={drinks.pints}
            description={drinks.description}
            key={index}/>
          )}
        </div>
      </div>
    </div>
  )
}
