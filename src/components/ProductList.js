import React, { Component } from 'react';

class ProductList extends Component {
   constructor(props) {
        super(props);
   }

    render() { 
        return (
            <>
                <ul>
                    {this.props.products.map(product => (
                        <li key={product.id}>
                            {product.name} - ${product.price}
                        </li>
                    ))}
                </ul>
            </> 
        );
    }
}

export default ProductList;
