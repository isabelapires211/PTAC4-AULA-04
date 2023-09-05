import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUsers from "@/app/componente/ListUsers";

export default async function Dashboard() {
    const users = await getUsers();
  return(
    <div>
        <Suspense fallback={<p>carregando...</p>}>
            <ListUsers users={users}/>

            <a href="/pages/alterar">Alterar</a>
            <a href="pages/registrar">Registrar</a>
        </Suspense>
     
    </div>
  );};