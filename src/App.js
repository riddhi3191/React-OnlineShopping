import React,{Component, Fragment} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Default from './pages/Default'

import SingleProductPage from './pages/SingleProduct'
import CartPage from './pages/CartPage'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import fire from './Config/Fire'
import Toolbar from './components/Navigation/Toolbar/Toolbar'
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import Cart from './components/Navigation/Cart/Cart'
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      user : {}
    }
  }


  componentDidMount () {
    this.authListener();
  }

  authListener (){
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if(user) {
        this.setState({user: user});
      }
      else{
        this.setState({user:null})
      }
    })
  }

  render(){
    return(
      <Fragment>
       <Toolbar />
       <SideDrawer />
      <Cart />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
         
          <Route path="/products" exact component={ProductsPage} />
          <Route path="/products/:id" exact component={SingleProductPage}></Route>
          <Route path="/cart" exact component={CartPage}></Route>
          {this.state.user ?  <HomePage/> : <Login/>  }
          <Route  component={Default}></Route>
        </Switch>
       
       
        <Footer />
      </Fragment>
    )
    
  }
  
}

// const Button = styled.button `
// color: blue;
// background: black;
// font-size: 2rem;
// `;

export default App;
