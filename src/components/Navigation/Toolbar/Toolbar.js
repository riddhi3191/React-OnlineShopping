import React,{Fragment} from 'react'
import './Toolbar.css'
import logo from '../../../images/logo.jpeg'

import {FaBars, FaCartPlus} from 'react-icons/fa'


export default function Toolbar(props) {
    return (
       <Fragment>
        <header className="Toolbar">
            <div><FaBars/></div>
            <div ><img src={logo} alt="logo"/></div>
            <div>SEARCH</div>
            <div>Login</div>
            <div style={{float:"right"}}><FaCartPlus/></div>
            <nav>
                ...
            </nav>

        </header>
       </Fragment>
    )
}
