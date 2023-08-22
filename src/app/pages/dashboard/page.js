import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";

export default async function Dashboard() {
    const usuarios = getUsers()
    return (
        <div>
              <Suspense fallback={<p>carregador...</p>}/>
            <ListUser user={users}/>

            {usuarios.map ((usuario)=>{
               <p>{usuario.nome}</p>


         })}


            <Suspense/>
         
        </div>
    );
};