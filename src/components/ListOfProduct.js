import React from 'react'
import Menu from './menu';
import '../pages/style.css'

const ListOfProduct = () => {
  return (
    <>
        {
            Menu.map( (data) => (
                <div className='product-container'>
                    <div className='product-box'>
                        <div className='product-image'>
                            <img src={data.image} alt='product image' />
                        </div>
                        <div className='product-info'>
                            <h2>{data.name}</h2>
                            <div className='product-details'>
                                <h3>{data.price}</h3>
                                <h3>{data.rating}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            ) )
            
        }
    </>
  )
}

export default ListOfProduct