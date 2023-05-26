import React from "react";
import logo from "../../assets/logo404.jpg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
const navigate = useNavigate();

  return (
    <main className="h-screen w-full banner">
      <div className="flex flex-col items-center pt-20 h-screen">
        <img className="w-52" src={logo} alt="logotipo food app" />
        <p className="text-base text-primary text-center my-6 hover:underline cursor-pointer">Precisa de uma conta?</p>
        <div className='text-center justify-end'>
    <p className='text-center text-3xl med:text-4xl lg:text-5xl font-semibold text-yellow-400 py-4'>Escolha qual perfil deseja se cadastrar na plataforma</p>
    <a href='/Profi'>
    <button className='bg-red-100 border border-yellow-400 font-bold rounded text-primary text-lg px-4 py-1 mb-4' >Profissional</button>
    </a>
    <a href='/Emp'>
    <button onClick={() => navigate('/Emp')} className='bg-red-100 border border-yellow-400 font-bold rounded text-primary text-lg px-4 py-1 mb-4'>Empresa</button>
    </a>
    <a href='/Cli'>
    <button onClick={() => navigate('/Cli')} className='bg-red-100 border border-yellow-400 font-bold rounded text-primary text-lg px-4 py-1 mb-4'>Cliente</button>
    </a>
    </div>
    </div>
        
    </main>
  );
};

export default NotFound;
