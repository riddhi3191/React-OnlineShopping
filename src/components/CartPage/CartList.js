import React from 'react'
import CartItem from './CartItem'
import {ProductConsumer} from '../../context'

export default function CartList() {
    return (
        <div>
            CartList
            <ProductConsumer>
            <CartItem/>
            
            </ProductConsumer>
        </div>
    )
}
