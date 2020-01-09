import React from 'react'
import { ProductConsumer } from '../context/context'
import {Link} from 'react-router-dom'
import './SingleProduct.css'



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
                       <div className="product">
                        <div className="image-container">
                            <img src={`../${image}`}
                                alt="productsimage"
                                className="image" 
                                />
                        </div>
                        <div className="data-container">
                            <h5 className="title">model: {title}</h5>
                            <h5 className="comapny">company: {company}</h5>
                            <h5 className="price">price: {price}</h5>
                            <p className="description"> Information about the product:</p>
                            <p>{description}</p>

                            <button type="button" className="main-link" style={{ margin : "0.75rem" }} onClick={() => addToCart(id)}>add to cart</button>
                            <Link to="/products" className="main-link" style={{ margin : "0.75rem" }} >products</Link>
                            <Link to="/cart" className="main-link" style={{ margin : "0.75rem" }} >proceed to order</Link>
                        </div>
                       </div>
                    </div>
                </section> 
            }}
        </ProductConsumer>
    )
}
