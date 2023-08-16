import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
    const usuarios = getUsers()
    return (
        <div>
            {usuarios.map ((user)=>{
               <p>{user.nome}</p>


         })}
            
        </div>
    );
};