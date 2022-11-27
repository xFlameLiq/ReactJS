import { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';

export default function Login() {

  return (
    <div className="container-main">
      <form className="form">
      
      <div className="sesion-img">
        
      </div>
      <h1 className="title">Login</h1>
          <div className="data">
          <label>Correo:</label>
        < input className="input" type="text" name="" id="" />
          </div>
       
        <div className="data">
        <label>Contraseña:</label>
        <input className="input" type="password" name="" id="" />
        </div>
        
        <input className="input" type="submit" value="enviar" />
        <Link className="a" to='/Register'>¿No tienes una cuenta? Register</Link>
          {/* <Link to='/'>Home</Link> */}
      </form>
    </div>
  );
}