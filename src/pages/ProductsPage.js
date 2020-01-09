import React from "react";
import { ProductConsumer } from "../context";
import Title from "../components/Title"
import Product from '../components/Product'
import './Productpage.css'

export default function Products() {
  return (
    <ProductConsumer>
      {value => {
        const { filteredProducts } = value;
        return (
            <div className="container1">
              {/* title */}
              <Title  title="Exclusive products" center />
              {/* products */}
              <div className="product">
                {filteredProducts.map(product => {
                  return  <div className="xyz"><Product key={product.id} product={product} /> </div>
                })}
              </div>
            </div>
         
        );
      }}
    </ProductConsumer>
  );
}