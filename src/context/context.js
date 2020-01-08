import React, {Component} from 'react'
import {linkData} from './LinkData'
import {items} from './ProductData'
import {socialData} from './SocialData'

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        sidedrawerOpen: false,
        cartOpen: false,
        cartItems : 0,
        links: linkData,
        cart: [],
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        storeProducts: [],
        filteredProducts: [],
        featuredProducts: [],
        singleProductPage: [],
        loading: false
    }

    componentDidMount(){
        this.setProducts(items);
    }

    //set products
    setProducts = products => {
        let storeProducts = products.map(item => {
            const {id} = item.sys;
            const image = item.fields.image.fields.file.url;
            const product = {id, ...item.fields, image};
            return product;
        })
        console.log(storeProducts);
        //featued products
        let featuredProducts = storeProducts.filter(item => item.featured == true);
        this.setState({
            storeProducts,
            filteredProducts: storeProducts,
            featuredProducts,
            cart: this.getStorageCart(),
            singleProduct : this.getStorageProduct(),
            loading: false
        })
        
    }


    // getting cart from local storage
    getStorageCart = () => {
        return[ ];
    }

    //getting products from local storage
    getStorageProduct = () => {

    }


    //get total
    getTotal = () => {

    }

    //add total
    allTotals = () => {

    }

    //sync storage
    syncStorage = () => {

    }

    //add to cart
    addToCart = (id) => {
        console.log(`add to cart ${id}`);
        
    }

    //set single product
    setSingleProduct = id => {
        console.log(`set single product ${id}`);

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
                openCart : this.openCart,
                addToCart: this.addToCart,
                setSingleProduct: this.setSingleProduct
               }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}