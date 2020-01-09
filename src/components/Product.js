import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { ProductConsumer } from "../context";
import "./Product.css";

export default function Product({ product }) {
return (
    
    <ProductConsumer >
    {value => {
        const { addToCart, setSingleProduct } = value;
        return (
        <div style={{background: "#e9f5f4"}} className="container">
            <div className="card">
            <div className="img-container">
                <img
                src={product.image}
                className="card-img-bottom"
                alt="product"
                style={{ height: "320px" }}
                />

                <div className="product-icons">
                <Link
                    to={`/products/${product.id}`}
                    onClick={() => setSingleProduct(product.id)}
                >
                    <FaSearch className="icon" />
                </Link>

                <FaCartPlus
                    className="icon"
                    onClick={() => addToCart(product.id)}
                />
                </div>
            </div>

            <div className="card-body">
                <p className="mb-0">{product.title}</p>
                <p className="mb-0 text-main">${product.price}</p>
            </div>
            </div>
        </div>
        );
    }}
    </ProductConsumer>
  );
}


