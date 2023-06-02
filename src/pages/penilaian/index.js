import axios from 'axios';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function AddData() {
    
    const [nama_penilaian, setNama_penilaian] = useState("");
    const [mahasiswa_1, setMahasiswa_1] = useState("");
    const [mahasiswa_2, setMahasiswa_2] = useState("");
    const [mahasiswa_3, setMahasiswa_3] = useState("");
    const [mahasiswa_4, setMahasiswa_4] = useState("");
    const [mahasiswa_5, setMahasiswa_5] = useState("");
    const [mahasiswa_6, setMahasiswa_6] = useState("");
    const [mahasiswa_7, setMahasiswa_7] = useState("");
    const [mahasiswa_8, setMahasiswa_8] = useState("");
    const [mahasiswa_9, setMahasiswa_9] = useState("");
    const [mahasiswa_10, setMahasiswa_10] = useState("");

    const navigate = useNavigate();
    const data = {
        nama_penilaian,
        mahasiswa_1,
        mahasiswa_2,
        mahasiswa_3,
        mahasiswa_4,
        mahasiswa_5,
        mahasiswa_6,
        mahasiswa_7,
        mahasiswa_8,
        mahasiswa_9,
        mahasiswa_10
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/mahasiswa', data)
        navigate("/");
    }

  return (
    <div>
        <form>
            <div>
                <label htmlFor='name'>Nama Penilaian</label>
                <input 
                type="text" 
                name="nama_penilaian" 
                className='form-control' 
                value={nama_penilaian} 
                onChange={(e) => setNama_penilaian(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='mahasiswa_1'>Mahasiswa 1</label>
                <input 
                type="text" 
                name="mahasiswa_1" 
                className='form-control' 
                value={mahasiswa_1} 
                onChange={(e) => setMahasiswa_1(e.target.value)}
                />

            </div>
            <div>
                <label htmlFor='mahasiswa_2'>Mahasiswa 2</label>
                <input 
                type="text"
                 name="mahasiswa_3" 
                 className='form-control' 
                 value={mahasiswa_2} 
                onChange={(e) => setMahasiswa_2(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='mahasiswa_3'>Mahasiswa 3</label>
                <input 
                type="text" 
                name="mahasiswa_3" 
                className='form-control' 
                value={mahasiswa_3} 
                onChange={(e) => setMahasiswa_3(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='mahasiswa_1'>Mahasiswa 4</label>
                <input 
                type="text" 
                name="mahasiswa_1" 
                className='form-control' 
                value={mahasiswa_4} 
                onChange={(e) => setMahasiswa_4(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='mahasiswa_5'>Mahasiswa 5</label>
                <input type="text" 
                name="mahasiswa_5" 
                className='form-control' 
                value={mahasiswa_5} 
                onChange={(e) => setMahasiswa_5(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='mahasiswa_6'>Mahasiswa 6</label>
                <input type="text" 
                name="mahasiswa_6" 
                className='form-control' 
                value={mahasiswa_6} 
                onChange={(e) => setMahasiswa_6(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='mahasiswa_6'>Mahasiswa 7</label>
                <input type="text" 
                name="mahasiswa_6" 
                className='form-control' 
                value={mahasiswa_7} 
                onChange={(e) => setMahasiswa_7(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='mahasiswa_8'>Mahasiswa 8</label>
                <input type="text" 
                name="mahasiswa_8" 
                className='form-control' 
                value={mahasiswa_8} 
                onChange={(e) => setMahasiswa_8(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='mahasiswa_9'>Mahasiswa 9</label>
                <input type="text" 
                name="mahasiswa_9" 
                className='form-control' 
                value={mahasiswa_9} 
                onChange={(e) => setMahasiswa_9(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='mahasiswa_10'>Mahasiswa 10</label>
                <input type="text" 
                name="mahasiswa_10" 
                className='form-control' 
                value={mahasiswa_10} 
                onChange={(e) => setMahasiswa_10(e.target.value)}
                />
            </div>
            <Button onClick={handleSubmit} type="submit">Submit</Button>
        </form>
        
    </div>
  )
}
