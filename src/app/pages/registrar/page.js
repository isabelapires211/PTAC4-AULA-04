'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './estilo.css';

 const formRegister =  () => {
  const handlerRegistrar= async (e) => {
    e.preventDefault();
    toast.error('Os dados foram registrado com sucesso!')
  }

  return (
    <div>
      <h1>Cadastrar</h1>
      <form onSubmit={handlerRegistrar}>
        <input
          placeholder='Nome'
          type="Nome"
         >
        </input>
        <input
          placeholder='Email'
          type='Email'
         >
        </input>
        <input
          placeholder='Senha'
          type='password'
        >
        </input>
        <button>Cadastrar</button>
        <ToastContainer/>
      </form>
    </div>
  )
}

export default formRegister;