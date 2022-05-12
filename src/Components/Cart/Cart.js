import React, { PureComponent } from 'react'
import Title from "../Title";
import CartColumns from "./CartColumns.js";
import EmptyCart from "./EmptyCart";
import {ProductConsumer} from "../../Context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

class Cart extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <section>
            <ProductConsumer>
                {value => {
                    const {cart} = value;
                    if(cart.length>0){
                        return (
                            <div>
                        <Title name="Your" title="Cart"/>
                        <CartColumns/>
                        <CartList value={value}/>
                        <CartTotals value={value}/>
                        </div>
                        )
                    }
                    else {
                     return <EmptyCart/>;  
                    }
                }}
            </ProductConsumer>
         
        
         </section>   
        )
    }
}

export default Cart