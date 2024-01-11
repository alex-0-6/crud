import { useContext } from 'react';
import './App.css';
import { ContextData } from './context/Context';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Basket from './Basket';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add" element={<Basket />} />
      </Routes>
    </>
  );
}

export default App;
