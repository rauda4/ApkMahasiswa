import axios from "axios"

//getapi
export const GetApiMahasiswa = async () => {
  const res = await axios.get(`http://localhost:5000/mahasiswa`)
  const data = res.data

  return data;
}


