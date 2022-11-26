// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  // const [count, setCount] = useState(0)
  const name = 'React';
  let logo = 12;

  return (
    <div>
      <Login />
      <Register />
      <Home />
    </div>
  );
}

export default App
