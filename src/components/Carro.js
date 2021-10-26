import { Component } from 'react'
import BubbleAlert from './BubbleAlert.js'
import DetallesCarro from './DetallesCarro.js'

const styles= {
    carro: {
        backgroundColor: '#5F5A9D',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '17px',
        cursor: 'pointer',
        margin: '5px',
        position: 'center'
    },
    bubble: {
        position: 'relative',
        left: 25,
        top:20,

    },

}

class Carro extends Component {
    render() {
        const { carro, visibilidadCarro, mostrarCarro } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        return (
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0
                    ? <BubbleAlert value= { cantidad }/>
                    : null }
                </span>
                <button onClick={ mostrarCarro } style= {styles.carro}>
                    Carro
                </button>
                { visibilidadCarro ? <DetallesCarro carro={carro} /> : null}
            </div>
        )
    }
}

export default Carro
