import React from 'react';

import { Header, TodoForm } from './components';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main class="main">
        <TodoForm />
      </main>
    </div>
  );
}

export default App;
