import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Profi from './components/Profi';
import Emp from './components/Emp';
import NotFound from './pages/NotFound';
import Login from './pages/Login'
import Clie from './components/Clie';

function App() {
  return (
<>
<NavBar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/Profi' element={<Profi/>}/>
  <Route path='/Emp' element={<Emp/>}/>
  <Route path='/Clie' element={<Clie/>}/>
  <Route path='/*' element={<NotFound/>}/>
</Routes>
</>    

  );
}

export default App;
