import { Component } from 'react';


const styles = {
    button: {
        backgroundColor: '#5870C3',
        borderRadius: '15px',
        display: 'flex',
        padding: '15px 20px',
        border: 'none',
        cursor: 'pointer',
        color: '#fff'
    }
}
class Button extends Component {
    render() {
        return (
            <button style={styles.button} {...this.props}/>
        )
    }
}

export default Button