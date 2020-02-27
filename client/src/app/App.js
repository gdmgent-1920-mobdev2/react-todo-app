import React from 'react';

import { Header, TodoForm } from './components';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <main class="app__main">
          <TodoForm />
        </main>
      </div>
    </div>
  );
}

export default App;
