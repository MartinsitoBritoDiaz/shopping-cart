import { Component } from "react";
import Button from './Button.js' 
const styles = {
    product: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
        width: '70%',
        height: '100%',
        padding: '15px 20px',
        'border-radius': '10px'
    },
    img: {
        'width': '100%',
    }
}

class Product extends Component {
    render() {
        const { product, addToCart } = this.props

        return (
            <div style={styles.product}>
                <img style={styles.img} alt={product.name} src={product.img} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <Button onClick={() => addToCart(product)}>
                    Add to Cart
                </Button>
            </div>
        )
    }
}

export default Product