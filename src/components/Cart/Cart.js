import React from 'react';

const Cart = (props) => {
    console.log('cart props', props);
    const cart = props.cart;

    return (
        <div>
            <h3>Cart</h3>
            <h4>Number of course on Cart: {cart.length}</h4>
            <h4>Total course price: 0</h4>
        </div>
    );
};

export default Cart;