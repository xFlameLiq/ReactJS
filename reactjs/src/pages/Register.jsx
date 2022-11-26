import { useState } from "react";
import { Link } from "react-router-dom";
import './Register.css';

export default function Register() {

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

  return (
    <div className="container">
      <form id="form" onSubmit={registerUser}>
        <h1>Register</h1>
        <input type="text" name="" id="" value={name} onChange={handleName} />
        <input type="text" name="" id="" value={lastname} onChange={handleLastname} />
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
        <input type="submit" value="Register" />
        <div>
          <Link to='/login'>Login</Link>
          {/* <Link to='/'>Home</Link> */}
        </div>
      </form>
    </div>
  );
}