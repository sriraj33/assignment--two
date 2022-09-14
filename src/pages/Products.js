import React from 'react'
import './style.css';
import ListOfProducts from '../components/ListOfProduct';

const Products = () => {
  return (
    <div className='container'>
      <div className='component' id='products'>
        <h1>MUSIC</h1>
        <div  className='flex-products'>
          <ListOfProducts />
        </div>
        
      </div>
      
    </div>
    
  )
}

export default Products