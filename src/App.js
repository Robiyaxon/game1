import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/login/Login';
import Home from './component/home/Home';
import Footer from './component/Footer/Footer';
import Register from './component/login/Register';
import SingleVideo from './component/home/SingleVideo';
function App() {
  return (
    <div >
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path="/home/video/:id" element={<SingleVideo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
