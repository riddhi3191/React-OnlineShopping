import React,{ Component} from 'react';
import './Toolbar.css';
import logo from '../../../images/logo.jpeg';
import {FaBars, FaCartPlus} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../../../context';




export default class Toolbar extends Component {
    
    render(){
        return (
           <ProductConsumer>
            {value => {
                const { cartItems, handleSideDrawer, handleCart} = value;
                return(
                    <header className="Toolbar">
                    <div><FaBars className="nav-icon" onClick={handleSideDrawer}/></div>
                    <div ><img src={logo} alt="logo"/></div>
                    <div>SEARCH</div>
                    <div><Link to="/login">LOGIN</Link></div>
                    <div className="nav-cart" style={{float:"right"}}><FaCartPlus className="nav-icon" onClick={handleCart}/>
                        <div className="cart-item">
                            {cartItems}
                        </div>
                    </div>
           </header> 
                )
            }}
           </ProductConsumer>

            
         )
    }
    
}
