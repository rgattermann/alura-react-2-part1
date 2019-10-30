import React, {Component} from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
        name: "",
        book: "",
        price: "",
    };

    this.state = this.initialState;
  }

  onSubmit = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  render() {
    const {name, book, price} = this.state;

    return(
      <form>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="book">Livro</label>
        <input
          id="book"
          type="text"
          name="book"
          value={book}
          onChange={this.handleChange}
        />
        <label htmlFor="price">Preço</label>
        <input
          id="price"
          type="text"
          name="price"
          value={price}
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.onSubmit}>Salvar</button>
      </form>);
  }
}

export default Form;
