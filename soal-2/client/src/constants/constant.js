const BASE_URL = `http://localhost:3000`;

export function getBearerToken() {
  const token = localStorage.getItem('access_token');
  return `Bearer ${token}`;
}



export default BASE_URL;