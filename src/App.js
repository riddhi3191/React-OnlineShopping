import React,{Component, Fragment} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './pages/HomePage';
import Default from './pages/Default'
import Products from './pages/ProductsPage'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/CartPage'
import Footer from './components/Footer'
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login'
import fire from './Config/Fire'



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
        {/* navbar, cart, footer, sidebar */}
        <Layout>
        <Switch>
          <Route path="/" exact component={Home}></Route>
         {this.state.user ?  <Products/> : <Login/>  }
         
          <Route path="/product/:id" exact component={SingleProduct}></Route>
          <Route path="/Cart" exact component={Cart}></Route>
          <Route  component={Default}></Route>
        </Switch>
        
        </Layout>
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
