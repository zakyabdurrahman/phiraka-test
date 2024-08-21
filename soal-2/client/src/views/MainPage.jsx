import axios from "axios";
import { useEffect, useState } from "react"
import BASE_URL from "../constants/constant";
import { toast } from "react-toastify";

function MainPage() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  
  
  async function fetchUsers() {
    try {
      setLoading(true);
      const { data: responseData } = await axios.get(`${BASE_URL}/users`);

      
      setData(responseData.data);
      
      
    } catch (error) {
      console.log(error);
      toast.error("GAGAL FETCH DATA");
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
      <h1>DAFTAR USER</h1>
      <button>Tambah User</button>
      <table border={1}>
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
          {
            data.map((person, i) => {
              return (
              
                <tr key={person["Id"]}>
                  <td>{i + 1}</td>
                  <td>{person["Username"]}</td>
                  <td>{person["Password"]}</td>
                  <td>{person["CreateTime"]}</td>
                  <td>
                    <div>
                      <button>Edit</button>
                      <button>Delete</button>
                    </div>
                  </td>
                </tr>
                  
              
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default MainPage
