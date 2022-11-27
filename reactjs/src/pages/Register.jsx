import { useState } from "react";
import { Link } from "react-router-dom";
import './Register.css';

export default function Registrarme() {

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sex, setSex] = useState('');
  const [phone, setPhone] = useState('');

  function registerUser(evt) {
    evt.preventDefault();
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        lastname,
        email,
        password,
        sex,
        phone
      })
    }).then(res => res.json())
      .then(data => {
        alert(data.message);
      }
      ).catch(err => {
        alert(err.message);
      });
  }

  function handleName(evt) {
    setName(evt.target.value);
  }

  function handleLastname(evt) {
    setLastname(evt.target.value);
  }
  
  function handleEmail(evt) {
    setEmail(evt.target.value);
  }
  
  function handlePassword(evt) {
    setPassword(evt.target.value);
  }
  
  function handleSex(evt) {
    setSex(evt.target.value);
  }

  function handlePhone(evt) {
    setPhone(evt.target.value);
  }

  return (
    <div className="container">
      <form id="form" onSubmit={registerUser}>
        <h1>Crear una cuenta</h1>
        <label>Nombre:</label>
        <input type="text" required name="" id="" value={name} onChange={handleName} />
        <label>Apellido:</label>
        <input type="text" required lastname="" id="" value={lastname} onChange={handleLastname} />
        <label>Correo:</label>
        <input type="text" required email="" id="" value={email} onChange={handleEmail}/>
        <label>Contraseña:</label>
        <input type="text" required password="" id=""value={password} onChange={handlePassword} />
        <label>Sexo:</label>
        <input type="text" required sex="" id="" value={sex} onChange={handleSex}/>
        <label>Teléfono:</label>
        <input type="text" required phone="" id="" value={phone} onChange={handlePhone}/>
        <input type="submit" value="Registrarme"  />
        <div>
          <Link to='/login'>¿Ya tienes una cuenta? Login</Link>
          {/* <Link to='/'>Home</Link> */}
        </div>
      </form>
      <img src="./image/users.png"/>
    </div>
  );
}