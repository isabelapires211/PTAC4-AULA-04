'use client'
import React, { useEffect, userState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getUser, updateUser } from "@/app/functions/handlerAcessAPI";
import { useRouter } from "next/router";
import 'react-toastify/dist/ReactToastify.css';
import './estilo.css';


/*terminande escrever

 const form =  () => {
  const handlerAlterar= async (e) => {
    e.preventDefault();
    toast.error('Os dados alterado deu certo!')
  }


  export default function alterar ({ params}) {

    const [user, setUser] = userState({
      nome: '',
      email: '',
      password:''
    })

    const {push} = useRouter();

    useEffect(() => {

    })
  }


  /*return (
    <div>
      <h1>Alterar</h1>
      <form onSubmit={handlerAlterar}>
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
        <button>Alterar</button>
        <ToastContainer/>
      </form>
    </div>
  )
}

export default form;*/

