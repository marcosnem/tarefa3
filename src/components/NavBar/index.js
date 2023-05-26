import React from "react";
import logo from '../../assets/logo.jpg';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-yellow-300 z-50 w-full">
      <nav className="flex items-center max-w-screen-xl mx-a px-6 py-3" >
        <div className='flex flex-grow items-center'>
        <img src={logo} alt="logo" className='w-36 cursor-pointer'/>
        <h1 className='text-center text-3xl font-semibold text-gray-700'>EM&PROFI - Onde seus dados te ajudam a voar</h1>    
        </div>
        <div className='flex items-center justify-end space-x-6'>
    <button onClick={() => navigate('/')}>Home</button>
    <button>Consulta</button>
    {/* <button className='bg-primary px-6 text-white rounded-full transition duration-700 hover:scale-105'>Cadastro</button> */}
    <button onClick={() => navigate('/login')}>Login</button>
    </div>
      </nav>
    </header>
  );
};

export default NavBar;
