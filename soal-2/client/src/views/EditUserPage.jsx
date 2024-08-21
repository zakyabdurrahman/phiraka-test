import axios from "axios";
import BASE_URL, { getBearerToken } from "../constants/constant";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function EditUserPage() {
  const {id} = useParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const nav = useNavigate();
  
  async function handleEditUser(e) {
    e.preventDefault();
    try {
      if (!username || !password) {
        toast.error("Username dan Password wajib diisi");
        throw Error();
      }

      if (password.length > 8 || password.length < 5) {
        toast.error(
          "Password harus minimal 5 karakter dan maksimal 8 karakter"
        );
        throw Error();
      }

      const response = await axios.put(
        `${BASE_URL}/users/${id}`,
        {
          username,
          password,
        },
        {
          headers: {
            Authorization: getBearerToken(),
          },
        }
      );

      toast.success("User berhasil di edit");
      nav("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchUserName() {
    try {
      const {data} = await axios.get(`${BASE_URL}/users/${id}`, {
        headers: {
          Authorization: getBearerToken()
        }
      })
      console.log(data);
      
      setUsername(data.data.Username);
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    fetchUserName();
  }, [])
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[500px]">
        <h1 className="text-center font-bold text-2xl mt-4">
          Form Edit User
        </h1>
        <div className="border w-96 mt-4 rounded-md py-4 shadow-md flex flex-col items-center">
          <form onSubmit={handleEditUser}>
            <div>
              <p className="mb-2 font-bold">Nama/Username</p>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="username"
                value={username}
                className="input input-bordered w-full max-w-xs mb-4"
              />
            </div>
            <div>
              <p className="mb-2 font-bold">Password Baru</p>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="input input-bordered w-full max-w-xs mb-4"
              />
            </div>
            <div className="flex justify-center">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditUserPage
