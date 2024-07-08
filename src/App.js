import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Menu from  './Menu.js';
import Reservations from './Reservations';
import OrderOnline from './OrderOnline.js';
import Login from './Login.js';



function App() {
  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="order-online" element={<OrderOnline />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
