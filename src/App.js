import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './Header.js';
import Menu from  './Menu.js';
import Reservations from './Reservations.js';
import OrderOnline from './OrderOnline.js';
import Login from './Login.js';
import Footer from './Footer.js';

function App() {
  return (
      <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/"/>
          <Route exact path="/#about" />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
