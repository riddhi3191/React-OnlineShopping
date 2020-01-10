import React,{Fragment} from 'react'
import {ProductConsumer} from '../../context';
import './CartTotal.css'


export default function CartTotal() {
    return (
        <div>
            <ProductConsumer>
                {value => {
                    const {clearCart, cartSubTotal, cartTax, cartTotal} = value;
                    return  <Fragment>
                    <div className="product">
                        <button className="button" onClick={clearCart}>clear cart</button><br/>
                        <h3 className="subtotal">subTotal: ${cartSubTotal}</h3>
                        <h3 className="subtotal">Tax: ${cartTax}</h3>
                        <h3 className="subtotal">Total: ${cartTotal}</h3>

                    </div>
                    </Fragment>

                }}
            </ProductConsumer>
        </div>
    )
}
