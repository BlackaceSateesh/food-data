import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Ordersummary from './Components/OrderSummary';
import Login from './Components/Login';
import Register from './Components/Register';
import Thanks from './Components/Thanks';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} >         
          </Route>
          <Route path='/menu' element={<Menu />} >         
          </Route>
          <Route path='/menu/order' element={<Ordersummary />} >         
          </Route>
          <Route path='/user/signin' element={<Login />} >         
          </Route>
          <Route path='/user/signup' element={<Register />} >         
          </Route>
          <Route path='/ordered' element={<Thanks />} >         
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
