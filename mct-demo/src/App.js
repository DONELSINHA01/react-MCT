

import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Pages from './All Routes/Pages';
import Menu from './All Routes/Menu';
import Events from './All Routes/Events';
import Blog from './All Routes/Blog';
import Landing from './All Routes/Landing';
import Order from './Components/Order';
import OrderSuccess from './Components/OrderSuccess';
export default function App() {
  return (
    
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pages' element={<Pages/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/landing' element={<Landing/>} />
        <Route path='/addToCart' element={<Order/>} />
        <Route path='/orderSuccess' element={<OrderSuccess/>}/>
        
      </Routes>

    </div>
    
  );
}

