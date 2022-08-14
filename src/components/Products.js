import { Component } from "react";
import Product from './Product'

const styles = {
    products: {
        display: 'grid',
        'grid-template-columns': 'repeat(auto-fit, minmax(250px, auto) )',
        gap: '50px',
    }
        
}


class Products extends Component {
    render() {
        const { products, addToCart } = this.props
        
        return (
            <div style={styles.products}>
                {products.map(product => 
                    <Product
                      addToCart={addToCart}
                      key={Product.name}
                      product={product}  
                    />
                )}
            </div>
        )
    }
}

export default Products