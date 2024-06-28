import './App.css';
import Basket from './features/order/Basket';
import HotelList from './features/product/HotelList';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import HotelDetials from './features/product/HotelDetails';
import UserList from './features/user/UserList';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <UserList/>
        <Routes>
          <Route path='list' element={<HotelList />} />
          <Route path='/:id' element={<HotelDetials />} />
          <Route path='basket' element={<Basket />} />
          <Route path='user' element={<UserList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
