import React from 'react';
import './Cosmetice.css'
import { addToDB, removeProductFromDB } from '../../Utility/StoregDB'

const Cosmetice = (props) => {
    const { name, price, id } = props.cosmetice

    const addToCart = (id) => {
        addToDB(id)
    }

    const removeProduct = (id) => {
        removeProductFromDB(id)
    }

    return (
        <div className='products'>
            <h3>Product Name: {name}</h3>
            <h5>Price: ${price}</h5>
            <button onClick={() => addToCart(id)}>Add To Cart</button>
            <button onClick={() => removeProduct(id)}>Remove From Card</button>
            <button onClick={() => addToCart(id)}>Purches</button>
        </div>
    );
};

export default Cosmetice;