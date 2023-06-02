import axios from "axios"

//getapi
export const GetApiMahasiswa = async () => {
  const res = await axios.get(`http://localhost:5000/mahasiswa`)
  const data = res.data

  return data;
}


//add api
export const AddDataMahasiswa = async () => {
    const res = await axios.post(`http://localhost:5000/mahasiswa`)
    return res;
  }

//edit api

//delete api
