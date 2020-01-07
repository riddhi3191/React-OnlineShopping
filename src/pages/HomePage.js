import React,{Component, Fragment} from 'react'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import fire from '../Config/Fire';


export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.state={

        }
        this.logout = this.logout.bind(this)
    }

    logout(e){
        fire.auth().signOut();
    }
    render(){
        return (
            <Fragment>
                <Hero title="Online shopping" max="true">
                    <Link className="main-link" to="/products">PRODUCTS</Link>
                </Hero>
                <button onClick={this.logout}>LOGOUT</button>
            </Fragment>
        )
    }
    
}
