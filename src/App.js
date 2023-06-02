
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import MahasiswaLayout from './layouts/MahasiswaLayout';



function App() {
  return (
    <Routes>
      <Route path="/*" element={<MahasiswaLayout />} />
    </Routes>
  );
}

export default App;
