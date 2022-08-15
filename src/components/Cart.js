import { Component } from "react";
import BubleAlert from "./BubleAlert";
import CartDetails from "./CartDetails";

const styles = {
    cart: {
        fontWeight: 'bold', 
        backgroundColor: '#351001',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '15px',
        cursor: 'pointer',
    },
    buble: {
        position: 'relative',
        left: 12,
        top: 20,

    }
}

class Cart extends Component {
    render() {
        const { cart, isCartVisible, showCart } = this.props
        const quantity = cart.reduce((acc, index) => acc + index.quantity, 0)

        return (
            <div>
            <span style={styles.buble}>
            {quantity !== 0
                ? <BubleAlert value={quantity}/>
                : null}
            </span>
                <button onClick={showCart} style={styles.cart}>
                    Cart
                </button>
                {isCartVisible ? <CartDetails cart={cart} /> : null }
            </div>
        )
    }
}

export default Cart