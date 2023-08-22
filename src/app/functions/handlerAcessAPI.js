'use server'
const usuarios = [
    {
        nome: "isabela",
        password:"2210",
        email:"isapires@gmail.com",
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
    {
        nome: "Gustavo Gomes",
        password:"2210",
        email:"Gustavogomes@gmail.com",
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
    {
        nome: "Valentina",
        password:"1107",
        email:"valentina@gmail.com",
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
]
const getUserAuthenticated = (userlogin) => {
    let usuarioAuth= {};
    usuarios.map((user)=>{
        if(user.email === user.email && user.password === userlogin.password){
            usuarioAuth= user
        }
    })
     return usuarioAuth;


}

const getUsers = () =>{
    return usuarios;
        
}
export { getUsers, getUserAuthenticated };