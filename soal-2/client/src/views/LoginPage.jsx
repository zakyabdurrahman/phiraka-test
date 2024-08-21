import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BASE_URL from "../constants/constant";

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  async function handleLogin() {
    try {
      
      const response = await axios.post(`${BASE_URL}/login`, {username, password});
      const {access_token} = response.data;

      localStorage.setItem('access_token', access_token);
      toast.success("LOGIN SUKSES");
      nav('/');
    } catch (error) {
      console.log(error);
      toast.error("LOGIN GAGAL")
    }
  }

  return (
    <>
      <h1>Login</h1>
      <div>
        <p>Name/Username</p>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

        <p>Password</p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
}

export default LoginPage
