import { Component } from "react";

const styles = {
    logotype: {
        fontWeight: '700',
        fontSize: '2rem',
    }
}

class Logotype extends Component {
    render() {
        return (
             <div style={styles.logotype}>
                Zinnya
             </div>
        );
    }
}

export default Logotype