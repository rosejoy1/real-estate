import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Sell from './pages/Sell';
import Footer from './components/Footer';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <Header/> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/buy'  element={<Buy/>} />
        <Route path='/buy/:id'  element={<Buy/>} />
        <Route path='/sell' element={<Sell/>} />
        <Route path='/cart' element={<Cart/>} />

        

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
