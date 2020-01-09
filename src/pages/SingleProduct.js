import React from 'react'
import { ProductConsumer } from '../context/context'
import {Link} from 'react-router-dom'



export default function SingleProduct() {
    return (
        <ProductConsumer>
            {value => {
                const {singleProduct, addToCart, loading} = value;
                if( loading){
                    console.log("Hello from loading...");
                   return  <h1>Product loading...</h1>   
                }
                const {company, description, id, price, title, image} = singleProduct;
                return<section>
                    <div className="container">
                       
                    </div>
                </section> 
            }}
        </ProductConsumer>
    )
}
