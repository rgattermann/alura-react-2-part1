import React from 'react';
import './App.css';
import Table from "./Table";

function App() {
  const authors = [{
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
    }
  ];

  return <Table authors={authors} />;
}

export default App;
