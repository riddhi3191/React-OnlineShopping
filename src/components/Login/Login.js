import React, { Component } from 'react'
import fire from '../../Config/Fire'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import './Login.css'
import styled from 'styled-components'
import LoginHero from './LoginHero'


class Login extends Component {
    constructor(props){
        super(props);
        this.state={
          
            email: '',
            password: ''
        }
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this)
    }
    
        static contextTypes = {
            history: PropTypes.object.isRequired
      }
      

    login(e){
        e.preventDefault();
        console.log(this.state.email + "*************");
        console.log(this.state.password + "*************");
        
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);  
        });
        this.props.history.push('/');
    }
    handleChange (e) {
        this.setState({ [e.target.name] : e.target.value})
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            console.log(error);
        });
    }
    render() {
        return (
            <div >
            <LoginHero title="Please login" max="true">

                <form className="ContactData">
                    <label for="inputEmail" className="Label" >Email Address</label>
                    <input  className="Input" value={this.state.email} 
                        onChange={this.handleChange} 
                        type="email" 
                        name="email" 
                        id="inputEmail" 
                        aria-describedby="emailHelp" 
                        placeholder="Enater Email" />
                        <small id="emailHelp"> we'll never share your email with anyone else</small><br/>

                    <label for="inputEmail"className="Label" >Password</label>
                    <input className="Input" value={this.state.password} 
                        onChange={this.handleChange} 
                        type="password" 
                        name="password" 
                        id="inputPassword" 
                        placeholder="Enater Password" /><br/>

                    <button type="submit" onClick={this.login}>LOGIN</button>
                    <button onClick={this.signup} style={{marginLeft : '25px'}}>SIGNUP</button>
                </form>
                </LoginHero>
            </div>
        )
    }
}




export default withRouter(Login)