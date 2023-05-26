import React from 'react'
import logo from '../../assets/logo.jpg'

const Profi = () => {
  return (
    <main className='h-screen w-full banner'>
    <div className='flex flex-col items-center pt-20 h-screen w-full'>
        <img className='w-52' src={logo} alt='logotipo'/>
        <form className='b-white w-full mt-4 p-2 rounded-lg shadow-lg'>
           <div className='flex flex-col space-y-6'>
            <label>Nome completo
            <input 
            type="text" placeholder="Nome completo" name="email" className="w-full px-4 py3 rounded-lg ring-red-200 border border-gray-300 focus:outline-none transition duration-300"
            /></label>
            <label>Profissão
            <input 
            type="text" placeholder="Nome completo" name="profissao" className="w-full px-4 py3 rounded-lg ring-red-200 border border-gray-300 focus:outline-none transition duration-300"
            /></label>
            <label>Endereço
            <input 
            type="text" placeholder="Endereço" name="endereco" className="w-full px-4 py3 rounded-lg ring-red-200 border border-gray-300 focus:outline-none transition duration-300"
            /></label>
            <label>Telefone
            <input 
            type="number" placeholder="telefone" name="telefone" className="w-full px-4 py3 rounded-lg ring-red-200 border border-gray-300 focus:outline-none transition duration-300"
            /></label>
            <label>Email 
            <input 
            type="email" placeholder="telefone" name="email" className="w-full px-4 py3 rounded-lg ring-red-200 border border-gray-300 focus:outline-none transition duration-300"
            /></label>
            <label>Senha de acesso</label>
            <input 
            type="password" placeholder="Digite sua senha" name="senha" className="w-full px-4 py3 rounded-lg ring-red-200 border border-gray-300 focus:outline-none transition duration-300"
            />
            </div> 
            <button type="submit" className="w-full py-3 bg-yellow-300 text-black-300 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300">Cadastrar</button>
            {/* <p className="text-base text-primary text-center my-6 hover:underline cursor-pointer">Precisa de uma conta?</p> */}
        </form>
    </div>
   </main>
  )
}

export default Profi;