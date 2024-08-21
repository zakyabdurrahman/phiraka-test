import axios from "axios";
import { useEffect, useState } from "react"
import BASE_URL, { getBearerToken } from "../constants/constant";
import { toast } from "react-toastify";
import { formatDate } from "../helpers/helpers";
import { Link, useNavigate } from "react-router-dom";

function MainPage() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  function handleLogout() {
    localStorage.clear();
    nav('/login')
  }

  async function handleDeleteUser(id) {
    try {
      const response = await axios.delete(`${BASE_URL}/users/${id}`, {
        headers: {
          Authorization: getBearerToken()
        }
      })
      
      toast.success('User telah dihapus');
      fetchUsers();
    } catch (error) {
      console.log(error);
      
    }
  }

  
  async function fetchUsers() {
    try {
      setLoading(true);
      const { data: responseData } = await axios.get(`${BASE_URL}/users`, {
        headers: {
          Authorization: getBearerToken()
        }
      });

      
      setData(responseData.data);
      
      
    } catch (error) {
      console.log(error);
      toast.error("GAGAL FETCH DATA");
      if (error.response.status === 401) {
        localStorage.clear();
        nav('/login');
      }
    } finally {
      setLoading(false)
    }

  }

  useEffect(() => {
    fetchUsers();
    
    
  }, [])

  if (loading) {
    return <></>
  }

  return (
    <>
      <h1 className="text-center text-2xl font-bold mt-4">DAFTAR USER</h1>
      <div className="flex justify-center mt-4 mb-8">
        <Link to="/add">
          <button className="btn btn-primary mx-4 ">Tambah User</button>
        </Link>

        <button className="mx-4 btn btn-error" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Password</th>
            <th>CreateTime</th>
            <th>Fungsi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, i) => {
            return (
              <tr key={person["Id"]}>
                <td>{i + 1}</td>
                <td>{person["Username"]}</td>
                <td>RAHASIA</td>
                <td>{formatDate(person["CreateTime"])}</td>
                <td>
                  <div>
                    <Link to={`/edit/${person["Id"]}`}>
                      <button className="btn btn-secondary">Edit</button>
                    </Link>

                    <button
                      className="btn btn-error mx-4"
                      onClick={(e) => handleDeleteUser(person["Id"])}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default MainPage
