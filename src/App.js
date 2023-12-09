import React, { useState } from 'react';
import TDList from './TDList'


function App() {
  return (
  <>
    <TDList />
    <input type="text" />
    <button>Add Todo</button><br></br>
    <button>Clear Completed Todos</button>
    <div>0 left to do</div>
  </>
  )
}

export default App;
