import React from 'react'
import Title from '../Title'
import CartColumn from './CartColumns'
import CartList from './CartList'
import CartTotal from './CartTotal'
import './Cart.css'

export default function Cart() {
    return (
       
        <div >
            <Title title="cart items" center/>
            <CartColumn/><br/>
            <CartTotal/>
        </div>
    )
}
