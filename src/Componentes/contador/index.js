import React, { Component } from 'react';
import { Button } from 'reactstrap'
import './contador.css'

class Contador extends Component {
    state = {
        numero: 0
    }

    aumentar = () => {
        let num = this.state.numero
        num += 1
        this.setState({ numero: num })
    }

    diminuir = () => {
        let num = this.state.numero

        if (num === 0) {
            return alert('Não é possivel diminuir mais')
        }
        num--
        this.setState({ numero: num })

    }

    render() {
        return (
            <div>
                <h1 className='contador-titulo'>
                    {this.state.numero}
                </h1>
                <Button className='mr-2' color='success' outline onClick={this.aumentar}>Aumentar</Button>
                <Button color='danger' outline onClick={this.diminuir}>Diminuir</Button>

            </div>
        )

    }
}

export default Contador;