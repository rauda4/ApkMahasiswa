import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Navbar1 from '../components/Navbar';
import Mahasiswa from '../pages/mahasiswa'
import AddData from '../pages/penilaian';

export default function MahasiswaLayout() {
    const navigate = useNavigate();

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }, [navigate])
  return (
    <>
        <Navbar1/>
        <Routes>
            <Route path="/" element={<Mahasiswa />} />
            <Route path="/TambahNilai" element={<AddData />} />
            <Route path='*' element={<Navigate to={"/"} />} /> {" "}
        </Routes>
    </>
  )
}
