import React,{Fragment, Component} from 'react';
import './Toolbar.css';
import logo from '../../../images/logo.jpeg';
import {FaBars, FaCartPlus} from 'react-icons/fa';
import {Link} from 'react-router-dom';




export default class Toolbar extends Component {
    
    render(){
        return (
            <Fragment>
         
             <header className="Toolbar">
                 <div><FaBars/></div>
                 <div ><img src={logo} alt="logo"/></div>
                 <div>SEARCH</div>
                 <div><Link to="/login">LOGIN</Link></div>
                 <div style={{float:"right"}}><FaCartPlus/></div>
             </header>

            </Fragment>
         )
    }
    
}
