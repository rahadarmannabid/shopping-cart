import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    const totalPopulation=cart.reduce((sum,country)=> sum+country.population,0)
    return (
        <div>
            <h1>This is {props.cart.length}</h1>
            <h1>total population {totalPopulation}</h1>
        </div>
    );
};

export default Cart;