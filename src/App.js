import React from 'react';
import TodoListComponent from './TodoListComponent'

function App() {
  return (
    <>
      <TodoListComponent />
      <input type="text"></input>
      <button>Add Todo</button>
      <button>Clear Completed Todo</button>
      <div>0 left to do </div>
    </>
  );
}

export default App;
