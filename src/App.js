import React, {Component} from 'react';
import './App.css';
import Table from "./Table";

class App extends Component{
  state = {
    authors: [{
      name: 'Paulo',
      book: 'React',
      price: '1000'
    },
    {
      name: 'Daniel',
      book: 'Java',
      price: '99'
    },
    {
      name: 'Marcos',
      book: 'Design',
      price: '150'
    },
    {
      name: 'Bruno',
      book: 'DevOps',
      price: '100'
    },
  ]};

  removeAuthor = index => {
    const { authors } = this.state;

    this.setState({
      authors: authors.filter((author, authorIndex) => authorIndex !== index)
    });
  }

  render() {
    return <Table
    authors={this.state.authors}
    removeAuthor={this.removeAuthor}
    />;
  }
}

export default App;
