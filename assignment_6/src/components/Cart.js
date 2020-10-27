import React from "react";
import ReactDOM from "react-dom";

import "./Cart.css";

class Cart extends React.Component {
    constructor(props){
        super(props);

        console.log("cart items passed to cart.js: ", this.props.cartItems);
        this.productContainers = "";
        //this.buildProductContainers();

        /* TESTING */
        /*
        console.log("building product containers...");
        for (let i=0; i < this.props.cartItems.length; i++){
            console.log("Item: ", this.props.cartItems[i]);


            this.productContainers.concat(
                '<div className="col-5 product-container">Filler</div>'
            );
        }
        */
    }

    /*
    buildProductContainers() {
        console.log("building product containers...");
        for (let i=0; i < this.props.cartItems.length; i++){

            console.log("Item: ", this.props.cartItems[i]);


            this.productContainers.concat(
                <div className="col-5 product-container">
                    Filler
                </div>
            );
        }
    }
    */

    renderProducts() {
        let productList = [];
        for (let i=0; i < this.props.cartItems.length; i++){
            /* TESTING */
            console.log("Item: ", this.props.cartItems[i]);

            productList.push(
                <React.Fragment key={i}>
                    <div className="cart-product-container">
                        <h4>{this.props.cartItems[i].name}</h4>
                        <div>{this.props.cartItems[i].color}</div>
                        <div>{this.props.cartItems[i].fill}</div>
                    </div>
                </React.Fragment>
            );
        }

        return productList;
    }

    render() {
        //console.log("The cart contains: ", this.productContainers.length);
        return (
            <main>
                <h2>Cart</h2>
                <div className = "col-5 products-list">
                    {this.renderProducts()}
                </div>
                <div className="col-3 cart-summary">
                    Static Filler
                </div>
            </main>
        )
    }
}

export default Cart;