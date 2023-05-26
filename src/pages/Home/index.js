import React from 'react'
import Profi from '../../components/Profi';
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const navigate = useNavigate();
  return (
 <>
 <section className='home-banner w-full'>
  <div className='flex flex-col items-center justify-center h-full'>
  <h1 className='text-center text-3xl med:text-4xl lg:text-5xl font-semibold text-yellow-400 drop-shadow-lg shadow-black'>Buscando manter um banco de dados atualização e neutro, guardamos dados alimentados por empresas e profissionais que querem gerar mais oportunidades de fechar parcerias, estando com uma base sólida para atuar em projetos da região e criando um dashboard baseado na autenticidade das informações e feedback dos clientes atendidos, das empresas e dos profissionais.</h1>
   </div>
   </section>
  <section>
   <div>
    <p className='bg-blue-500 text-left text-3xl med:text-4xl lg:text-5xl font-semibold text-yellow-400'>Seus dados, nossos cuidados</p> <img src=''/>
   </div>
    </section> 
    <div className='text-center justify-end'>
    <p className='text-center text-3xl med:text-4xl lg:text-5xl font-semibold text-yellow-400 py-4'>Escolha qual perfil deseja se cadastrar na plataforma</p>
   
    <button onClick={() => navigate('/Profi')} className='bg-red-100 border border-yellow-400 font-bold rounded text-primary text-lg px-4 py-1 mb-4' >Profissional</button>
   
    
    <button onClick={() => navigate('/Emp')} className='bg-red-100 border border-yellow-400 font-bold rounded text-primary text-lg px-4 py-1 mb-4'>Empresa</button>
    
    
    <button onClick={() => navigate('/Clie')} className='bg-red-100 border border-yellow-400 font-bold rounded text-primary text-lg px-4 py-1 mb-4'>Cliente</button>
    
    </div>
    <section><p><a href="https://copyrightservice.net/pt/copyright_notice" title="Avisos de direitos autorais">Avisos de direitos autorais</a> - Serviços Internacionais Direitos do Autor  (ICS)</p></section>
 </>
  )
}

export default Home;