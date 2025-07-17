import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/login/Login';
import Home from './component/home/Home';
import Footer from './component/Footer/Footer';
import Register from './component/login/Register';
import SingleVideo from './component/home/SingleVideo';
import ScrollToTop from './component/ScrollToTop';
import MazeGame from "./component/Game/MazeGame"
import FindTheImageGame from './component/Game/FindTheImageGame';
function App() {
  return (
    <div >
      <ScrollToTop />
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path="/home/video/:id" element={<SingleVideo />} />
        <Route path="game/" element={<MazeGame />} />
        <Route path="game2/" element={<FindTheImageGame />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
