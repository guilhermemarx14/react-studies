import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('guilhermemarx');

  return <div>{username.length >= 5 && <h1>Hello {username}</h1>}</div>;
}

export default App;
