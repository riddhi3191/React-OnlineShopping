import React, { Component } from 'react'
import fire from '../Config/Fire';

export default class ProductsPage extends Component {
    constructor(props){
        super(props);
        this.state={

        }
        this.logout = this.logout.bind(this)
    }

    logout(e){
        fire.auth().signOut();
    }
    render() {
        return (
            <div>
                <h1>I am from product page</h1>
                <button onClick={this.logout}>LOGOUT</button>
            </div>
        )
    }
}

