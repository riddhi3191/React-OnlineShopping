import React, {Component} from 'react'
import {linkData} from './LinkData'
import {items} from './ProductData'

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
        singleProduct: {},
        loading: true
    }

    componentDidMount(){
        this.setProducts(items);
    }

    //set products
    setProducts = (products) => {
        let storeProducts = products.map(item => {
            const {id} = item.sys;
            const image = item.fields.image.fields.file.url;
            const product = {id, ...item.fields, image};
            return product;
        })
        console.log(storeProducts);
        //featued products
        let featuredProducts = storeProducts.filter(item => item.featured === true);
        this.setState({
            storeProducts,
            filteredProducts: storeProducts,
            featuredProducts,
            cart: this.getStorageCart(),
            singleProduct : this.getStorageProduct(),
            loading: false
        }, () => {
            this.addTotals();
        })
        
    }


    // getting cart from local storage
    getStorageCart = () => {
        let cart;
        if(localStorage.getItem("cart")){
            cart = JSON.parse(localStorage.getItem("cart"))
        }
        else{
            cart = []
        }
        return cart;
    }

    //getting products from local storage
    getStorageProduct = () => {
        return localStorage.getItem("singleProduct")? JSON.parse(localStorage.getItem("singleProduct")) : {}
    }


    //get total
    getTotals = () => {
        let subTotal = 0;
        let cartItems= 0;
        this.state.cart.forEach(item => {
            subTotal += item.total;
            cartItems += item.count;
        })
        subTotal = parseFloat(subTotal.toFixed(2));
        let tax = subTotal * 0.2;
        tax = parseFloat(tax.toFixed(2));
        let total = subTotal + tax;
        total = parseFloat(total.toFixed(2));
        return{
            cartItems,
            subTotal,
            total,
            tax
        }
    }

    //add total
    addTotals = () => {
        let totals = this.getTotals();
        this.setState({
            cartItems: totals.cartItems,
            cartSubTotal: totals.subTotal,
            cartTax: totals.tax,
            cartTotal: totals.total
        })
    }

    //sync storage
    syncStorage = () => {
        localStorage.setItem("cart", JSON.stringify(this.state.cart));

    }

    //add to cart
    addToCart = (id) => {
        console.log(`add to cart ${id}`);
        let tempCart = [...this.state.cart];
        let tempProducts = [...this.state.storeProducts];
        let tempItem = tempCart.find(item => item.id === id);
        if(!tempItem){
            tempItem = tempProducts.find(item => item.id === id);
            let total = tempItem.price;
            let cartItem = {...tempItem, count: 1, total};
            tempCart = [...tempCart, cartItem];
        }else{
            tempItem.count++;
            tempItem.total = tempItem.price * tempItem.count;
            tempItem.total = parseFloat(tempItem.total.toFixed(2));
        }
        this.setState(() => {
            return{ cart: tempCart}
        }, () => {
            this.addTotals();
            this.syncStorage();
            //this.openCart();
        })
        
    }

    //set single product
    setSingleProduct = id => {
        console.log(`set single product ${id}`);
        let product = this.state.storeProducts.find(item => item.id === id);
        localStorage.setItem("singleProduct",JSON.stringify("singleProduct"));
        this.setState({
            singleProduct: {...product},
            loading: false
        })

    }

    //cart page functionality for increment items
    increment = (id) => {
        console.log(id);
        
    }

    //cart page functionality for decrement items
    decrement = (id) => {
        console.log(id);
        
    }

    //cart page functionality for remove items
    removeItem = (id) => {
        console.log(id);
        
    }

    //clear cart
    clearCart = () => {

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
                setSingleProduct: this.setSingleProduct,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart:this.clearCart
               }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}