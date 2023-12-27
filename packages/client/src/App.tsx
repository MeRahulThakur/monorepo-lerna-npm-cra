import React from 'react';
import { Button, Input } from "@npm-lerna-monorepo/common"
import './App.css';

function App() {
  return (
    <div className="App">
      <Button label="Button text"/>
      <Input id='inputfield' onChange={(e) => console.log(e.target.value)} placeholder='Sample placeholder' />
    </div>
  );
}

export default App;
