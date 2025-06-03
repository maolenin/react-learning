import React from 'react';
import './ShoppingCart.css'; 
import {useDispatch, useSeletor} from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity} from './CartSlice'; 

const ShoppingCart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item,quantity, 0);

  const handleRemoveItem = itemid => {
      dispatch(removeItemFromCart)
      };
  
  const handleClearCart = () => {
      dispatch(clearCart());
      };

  const handleIncreaseQuantity = itemId => {
      dispatch(increaseItemQuantity(itemId));
      };

  const handleDecreaseQuantity = itemId => {
      dispatch(decreaseItemQuantity(itemId));
      };

  return (
    <>
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map(item => (
        <li key={item.id} className="cart-item">
          <span>{item.name} - ${item.price}</span>
          <div className="quantity-controls">
            <button className="quantity-control-btn" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
            <span> {item.quantity} </span>
            <button className="quantity-control-btn" onClick={() => handleDecreaseQuantity(item.id)}>+</button>
          </div>
          <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </li>
        ))} 
      </ul>
      <button className="clear-cart-btn" >Clear Cart</button>
    </div>
  
    </>
  );
};

export default ShoppingCart;
