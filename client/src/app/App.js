import React from 'react';

import { Header, TodoForm } from './components';

import './App.css';
import TodoListItem from './components/TodoListItem';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <main className="app__main">
          <TodoForm />
          <TodoListItem />
        </main>
      </div>
    </div>
  );
}

export default App;
