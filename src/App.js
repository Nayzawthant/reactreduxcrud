
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import UserListing from './component/UserListing';
import Adduser from './component/Adduser';
import UpdateUser from './component/UpdateUser';
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <div className='header'>
        <Link to={'/'} style={{marginRight:'10px', textDecoration:'none', color:"white"}}>Home</Link>
        <Link to={'/user'} style={{marginRight:'10px', textDecoration:'none', color:"white"}}>User</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/user' element={<UserListing />}></Route>
        <Route path='/user/add' element={<Adduser />}></Route>
        <Route path='/user/edit/:code' element={<UpdateUser />}></Route>
      </Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
