'use server'

import { headers } from "next/dist/client/components/headers"

const usuarios = [
    {
        nome: "isabela",
        password:"123",
        email:"isabela@teste",
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
    {
        nome: "Gustavo Gomes",
        password:"123",
        email:"Gustavo@gmail.com",
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
]

const url = "https://trabalho-final-seven.vercel.app/"


const getUserAuthenticated = async (user) => {

    const responseOfApi = await fetch (url+ 'user/authenticated',
     {
        method: "POST",
        headers: { "Content-type" : "Application/json"},
        body:JSON.stringify(user)
     }
     )

     const userAuth = await responseOfApi.json()
     return userAuth;

}

const getUsers = () =>{
    return usuarios;
        
}
export { getUsers, getUserAuthenticated };