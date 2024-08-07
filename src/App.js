import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WarehouseListPage from './pages/WarehouseListPage';
import WarehouseDetailPage from './pages/WarehouseDetailPage';
import { FaMoon } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

const App = () => {
  const [show,setShow] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WarehouseListPage />} />
        <Route path="/warehouse/:id" element={<WarehouseDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
