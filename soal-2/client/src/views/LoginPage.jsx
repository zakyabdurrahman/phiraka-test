import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BASE_URL from "../constants/constant";
import ReCAPTCHA from "react-google-recaptcha";


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
  const recaptchaRef = useRef();
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    try {
      
      
      const recaptchaToken = recaptchaRef.current.getValue();
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/login`, {
        username,
        password,
        recaptchaToken
      });
      const { access_token } = response.data;
      localStorage.setItem('access_token', access_token);
      toast.success("LOGIN SUKSES");
      nav('/');
    } catch (error) {
      console.log(error);
      if (error.response.data.message === "Please fill reCAPTCHA") {
        toast.error("LOGIN GAGAL TOLONG ISI RECAPTCHA")
      } else {
        toast.error("LOGIN GAGAL");
      }
      
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[500px]">
        <h1 className="text-center font-bold text-2xl">Login</h1>
        <div className="border w-96 mt-4 rounded-md py-4 shadow-md flex flex-col items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <p className="mb-2 font-bold">Name/Username</p>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="input input-bordered w-full max-w-xs mb-4"
            />

            <p className="mb-2 font-bold">Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="input input-bordered w-full max-w-xs mb-4"
            />
            <ReCAPTCHA
              ref={recaptchaRef}
              onExpired={() => recaptchaRef.current.reset()}
              sitekey="6Lfe1ysqAAAAAH-fN6r9n09joaMcY-UMHjXojKzw"
            />
            <div className="flex justify-center">
              {loading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                <button className="mt-4 btn btn-success" onClick={handleLogin}>
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage
