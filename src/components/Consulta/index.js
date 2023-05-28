import React from 'react'
import logo from '../../assets/logo.jpg';


const Consulta = () => {
  return (
    <main className='h-screen w-full banner'>
    <div className='flex flex-col items-center pt-20 h-screen w-full'>
        <img className='w-52' src={logo} alt='logotipo'/>
        <form className='b-white w-full mt-4 p-2 rounded-lg shadow-lg'>
           <p className='bg-blue-500 text-left text-3xl med:text-4xl lg:text-5xl font-semibold text-yellow-400'>Digite o nome da empresa, profissional ou tipo de serviço que deseja informações </p>
           <div className='flex flex-col space-y-6'>
            <label>Nome ou Razao Social
            <input 
            type="text" placeholder="Nome/Razão" name="email" className="w-full px-4 py3 rounded-lg ring-red-200 border border-gray-300 focus:outline-none transition duration-300"
            /></label>
            <label>Serviços 
            <input 
            type="text" placeholder="serviços que deseja" name="servi-emp-profi" className="w-full px-4 py3 rounded-lg ring-red-200 border border-gray-300 focus:outline-none transition duration-300"
            /></label>
            </div> 
            <button type="submit" className="w-full py-3 bg-yellow-300 text-black-300 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300">Buscar</button>
            {/* <p className="text-base text-primary text-center my-6 hover:underline cursor-pointer">Precisa de uma conta?</p> */}
        </form>
    </div>
   </main>
  )
}

export default Consulta

