import React from 'react'
import'./CartColumn.css'

export default function CartColumns() {
    return (
        <div>
           
                {/* product */}
                <div className="product">
                    <p >products</p>
                </div >
                {/* product name */}
                <div className="product">
                    <p >Title</p>
                </div>
                {/* price */}
                <div className="product">
                    <p >price</p>
                </div>
                {/* quantity */}
                <div className="product">
                    <p >quantity</p>
                </div>
                {/* remove */}
                <div className="product">
                    <p >remove</p>
                </div>
                {/* total */}
                <div className="product">
                    <p>total</p>
                </div>
           
        </div>
    )
}
