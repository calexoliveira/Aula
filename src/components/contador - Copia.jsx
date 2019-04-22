import React, { Component } from "react";

class Contador extends Component {
  state = { contador: 0, itens: ["item1", "item2", "item3"] };
  estilos = {
    fontSize: 40,
    fontWeight: "normal"
  };
  render() {
    return (
      <React.Fragment>
        <span style={this.estilos} className={this.GetBadgeClasses()}>
          {this.formataContador()}
        </span>
        <button onClick={this.tratarIncremento} className="btn btn-secondary">
          Incrementar
        </button>
        <ul>
          {this.state.itens.map(item => (
            <li key={item}>{item}</li>
          ))}
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
