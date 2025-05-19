

import './App.css'
import Home from './componentes/Home.jsx';
import Cart from './componentes/Cart.jsx';
import { Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
    </Routes>
  );
};

export default App;