import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const lineItems = cartItems.map((item) => {
      return {
        price: item.price * 100, // Convert price to cents (Stripe expects the price in cents)
        quantity: item.quantity,
      };
    });

    if (lineItems.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ lineItems }).then((result) => {
      if (result.error) {
        toast.error(result.error.message);
      }
    });
  };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      {/* ... rest of your cart component JSX ... */}
    </div>
  );
}

export default Cart;
