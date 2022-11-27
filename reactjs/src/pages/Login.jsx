import { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';

export default function Ingresar() {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');


  function loginUser(evt) {
    evt.preventDefault();
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => res.json())
    .then(data => {
      if(data.result.length > 0) {
        alert("USUARIO LOGUEADO CORRECTAMENTE")
        location.href = '/';
        console.log("usuario encontrado");
      } else {
        alert("CORREO Y/O CONTRASEÑA INCORRECTOS")
        console.log("usuario NO encontrado");
      }
      
    }).catch(err => {
      alert(err.message);
    });
  }

  function handleEmail(evt) {
    setEmail(evt.target.value);
  }
  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  return (
    <div className="container-main">
      <form className="form" id="form" onSubmit={loginUser} >
        <div className="sesion-img"></div>
          <h1 className="title">Login</h1>
            <div className="data">
              <label>Correo:</label>
              <input className="input" type="text" name="" id=""  value={email} onChange={handleEmail}/>
            </div>
            <div className="data">
              <label>Contraseña:</label>
              <input className="input" type="text" name="" id="" value={password} onChange={handlePassword}/>
            </div>
              <input className="input" type="submit" value="Ingresar" />
          <Link className="a" to='/Register'>¿No tienes una cuenta? Register</Link>
           {/* <Link to='/'>Home</Link> */}
      </form>
    </div>
  );
}