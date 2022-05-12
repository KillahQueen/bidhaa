import React, { PureComponent } from 'react'
import Product from "./Product";
import Title from "./Title";
import {storeProducts} from "./Data";
import {ProductConsumer} from "../Context";

class Productlist extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
           products: storeProducts 
        };
    }

    render() {
        return (
            <React.Fragment>
               <div className="py-5">
                   <div class="container">
                    <Title name="Bidhaa" title="Zetu"/>
                    <div className = "row">
                        <ProductConsumer>
                            {value => {
                            return value.products.map(product => {
                                return <Product key={product.id} product={product}/>;
                            })
                             }}
                        </ProductConsumer>
                    
                    </div>    
                   </div>
               </div>

            </React.Fragment>
          
        );
    }
}

export default Productlist