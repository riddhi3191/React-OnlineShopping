import React,{Component, Fragment} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './pages/HomePage';
import About from './pages/AboutPage'
import Default from './pages/Default'
import Products from './pages/ProductsPage'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/CartPage'
import NavBar from './components/Navbar/Navbar'
import Footer from './components/Footer'

class App extends Component {
  render(){
    return(
      <Fragment>
        {/* navbar, cart, footer, sidebar */}
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/Products" component={Products}></Route>
          <Route path="/product/:id" exact component={SingleProduct}></Route>
          <Route path="/Cart" exact component={Cart}></Route>
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
