import React from 'react';

export default function AddDrink() {
  return(
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Name of Drink'/>
        <input
          type='text'
          id='brand'
          placeholder='Brand'/>
        <input
          type='text'
          id='Price'
          placeholder='Price'/>
        <textarea
          id='description'
          placeholder='Description'/>

        <button type='submit'>Add drink!</button>
      </form>
    </div>
  );
}
