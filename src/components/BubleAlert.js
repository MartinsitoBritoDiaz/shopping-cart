import { Component } from "react";

const styles = {
    bubleAlert: {
        backgroundColor: '#ec4e0e',
        borderRadius: '15px',
        color: '#fff',
        padding: '4px 10px',
        fontSize: '0.8rem',
        width: '20px',
        
    }
}

class BubleAlert extends Component {
    getNumber(n) {
        if(!n) { return ' ' }
        return n > 9 ? '9+' : n
    }
    render() {
        const { value } = this.props
        return (
            <span style={styles.bubleAlert}>
                {this.getNumber(value)}
            </span>
        )
    }
}

export default BubleAlert