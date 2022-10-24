import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Boton from './components/Boton';

function App() {
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')
  return (
    <div className="App">
      <Input 
      user={user}
      setUser={setUser}
      password={password}
      setPassword={setPassword}
      />
      {password==='252525' ? <Boton /> : null}
    </div>
  );
}

export default App
