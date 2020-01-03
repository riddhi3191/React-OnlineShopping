import React,{ Fragment} from 'react'
import logo from '../../images/logo.jpeg'
import {FaBars, FaCartPlus} from 'react-icons/fa'

export default function Navbar() {
    
    return (
    <Fragment>
    <div id="myNavbar">
        <div class="container">
            <ul>
            <li style={{float:"left"}}><FaBars /></li>
            <li class="right-nav"><img src={logo} alt="logo"/></li> 
            <li class="right-nav">SEARCH</li>
                <li class="right-nav">LOGIN</li>
            <li style={{float:"right"}}><FaCartPlus/></li> 
            </ul>
        </div>
    </div>
    </Fragment>
    )
}
