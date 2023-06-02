import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import { GetApiMahasiswa } from '../../api/MahasiswaController';
import { Link } from 'react-router-dom';

export default function Mahasiswa() {
    const [mahasiswa, setMahasiswa] = useState([]);

    useEffect(() => {
        GetApiMahasiswa().then((result) => {
            setMahasiswa(result)
        })
    }, [])

  return (
    <div>
        <Link to={`/TambahNilai`}>
            <Button variant='secondary' className='m-2'>Tambah Nilai</Button>
        </Link>
        <Table striped bordered hover variant="light sm">
                <thead>
                    <tr>
                        <th>Nama</th>
                        {mahasiswa.map((data) => (
                        <th>{data.nama_penilaian}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mahasiswa 1</td>
                        {mahasiswa.map((nilai) => (
                            <td>{nilai.mahasiswa_1}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Mahasiswa 2</td>
                        {mahasiswa.map((nilai) => (
                            <td>{nilai.mahasiswa_2}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Mahasiswa 3</td>
                        {mahasiswa.map((nilai) => (
                            <td>{nilai.mahasiswa_3}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Mahasiswa 4</td>
                        {mahasiswa.map((nilai) => (
                            <td>{nilai.mahasiswa_4}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Mahasiswa 5</td>
                        {mahasiswa.map((nilai) => (
                            <td>{nilai.mahasiswa_5}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Mahasiswa 6</td>
                        {mahasiswa.map((nilai) => (
                            <td>{nilai.mahasiswa_6}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Mahasiswa 7</td>
                        {mahasiswa.map((nilai) => (
                            <td>{nilai.mahasiswa_7}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Mahasiswa 8</td>
                        {mahasiswa.map((nilai) => (
                            <td>{nilai.mahasiswa_8}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Mahasiswa 9</td>
                        {mahasiswa.map((nilai) => (
                            <td>{nilai.mahasiswa_9}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Mahasiswa 10</td>
                        {mahasiswa.map((nilai) => (
                            <td>{nilai.mahasiswa_10}</td>
                        ))}
                    </tr>
                </tbody>
           
        </Table>
    </div>
  )
}
