import { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';

export default function Login() {

  return (
    <div className="container-main">
      <form className="form">
      <h1>Login</h1>
      <label>Correo:</label>
        <input className="input" type="text" name="" id="" />
        <label>Contraseña:</label>
        <input className="input" type="password" name="" id="" />
        <input className="input" type="submit" value="enviar" />
        <Link className="a" to='/Register'>¿No tienes una cuenta? Register</Link>
          {/* <Link to='/'>Home</Link> */}
      </form>
    </div>
  );
}