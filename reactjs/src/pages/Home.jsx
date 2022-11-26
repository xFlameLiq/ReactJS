import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/register'>Register</Link>
      <br />
      <Link to='/login'>Login</Link>
    </div>
  );
}