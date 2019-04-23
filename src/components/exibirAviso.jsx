import React, { Component } from "react";

class ExibirAviso extends Component {
    handleEvent = event => {
        alert("Foi clicado...");
    }
    constructor(props) {
        super(props);
        this.state = {
            nome: ""
        };
        this.changeText = this.changeText.bind(this);
    }
    changeText(event) {
        this.setState({
            nome: event.target.value
        });
    }
    render() {
        return (
            <div>
                <label htmlFor="nome">Informe o seu nome</label>
                <input type="text" id="nome" onChange={this.changeText} />
                <h3>{this.state.nome}</h3>
                <button onClick={(this.handleEvent)}>Clique aqui</button>
                <button /*onClick={(e) => this.deletaLinha(id, e)}*/> Deleta Linha</button>
                <button /*onClick={this.deletaLinha.bind(this, id)}*/>Deleta Linha2</button>
            </div>
        );
    }
}

export default ExibirAviso;