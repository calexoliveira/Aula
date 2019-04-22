import React, { Component } from "react";

class Contador extends Component {
  state = { contador: 0, itens: ["item1", "item2", "item3"] };
  renderItens() {
    if (this.state.itens.length === 0) return <p>Não existe Itens</p>;
    return <ul>
      {this.state.itens.map(item => <li key={item}>{item}</li>)}
    </ul>
  }

  render() {
    return (
      <React.Fragment>

        <ul>
          {this.state.itens.length === 0 && 'Inclua um item..'}
          {this.renderItens()}

        </ul>
      </React.Fragment>
    );
  }
  GetBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.contador > 10 ? "success" : "primary";
    return classes;
  }
  formataContador() {
    const { contador } = this.state;
    return contador === 0 ? "Zero" : contador;
  }
  tratarIncremento = () => {
    this.setState({ contador: this.state.contador + 1 });
  };
}

export default Contador;
