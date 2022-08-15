import { Component } from "react";
import Logotype from './Logotype.js'
import Cart from './Cart.js'

const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '80px',
        justifyContent: 'space-between',
        position: 'relative',
        color: '#0A283E',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1',
    }
}

class Navbar extends Component {
    render() {
        const { cart, isCartVisible, showCart } = this.props
        return (
            <nav style={styles.navbar}>
                <Logotype />
                <Cart 
                    cart={cart} 
                    isCartVisible={isCartVisible}
                    showCart={showCart}
                />
            </nav>
        )
    }
}

export default Navbar