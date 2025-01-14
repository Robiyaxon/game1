import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/login/Login';
import Home from './component/home/Home';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div >
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
