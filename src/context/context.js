import React, {Component} from 'react'

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        sidedrawerOpen: false,
        cartOpen: false,
        cartItems : 0
    }
    //function for handle sideDrawer 
    handleSideDrawer = () => {
        this.setState({sidedrawerOpen: !this.state.sidedrawerOpen})
    }

    //function for handle Cart 
    handleCart = () => {
        this.setState({cartOpen: !this.state.cartOpen})
    }

    //function for close cart
    closeCart = () => {
        this.setState({cartOpen: false})
    }

    //function for open cart
    openCart = () => {
        this.setState({cartOpen: true})
    }

    render(){
        return(
            <ProductContext.Provider 
            value={{
                ...this.state,
                handleSideDrawer : this.handleSideDrawer,
                handleCart : this.handleCart,
                closeCart : this.closeCart,
                openCart : this.openCart
               }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}