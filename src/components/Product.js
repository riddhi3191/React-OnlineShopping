import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { ProductConsumer } from "../context";
import "./Product.css";

export default function Product({ product }) {
return (
    
    <ProductConsumer >
    {value => {
        const { addToCart, setSinglePoduct } = value;
        return (
        <ProductWrapper style={{background: "#e9f5f4"}} className="container">
            <div className="card">
            <div className="img-container">
                <img
                src={product.image}
                className="card-img-top p-5"
                alt="product"
                style={{ height: "320px" }}
                />

                <div className="product-icons">
                <Link
                    to={`/products/${product.id}`}
                    onClick={() => setSinglePoduct(product.id)}
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
        </ProductWrapper>
        );
    }}
    </ProductConsumer>
  );
}

const ProductWrapper = styled.div`
  .card {
    box-shadow: 7px 5px 0px 0px rgba(151,171,184,0.32);
    transition: var(--mainTransition);
    height: 50%;
  }
  .card:hover {
    box-shadow: 6px 5px 29px 0px rgba(65,156,105,1);
    cursor: pointer;
  }
  .card-img-top {
    transition: var(--mainTransition);
  }
  .card:hover .card-img-top {
    transform: scale(1.15);
    opacity: 0.2;
  }
  .img-container {
    position: relative;
    display: flex;
  }
  .product-icons {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  .icon {
    font-size: 2.5rem;
    margin: 1rem;
    padding: 0.5rem;
    color: var(--primaryColor);
    background: var(--mainBlack);
    border-radius: 0.5rem;
  }
  .card:hover .product-icons {
    opacity: 1;
  }
  .card-body {
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;
