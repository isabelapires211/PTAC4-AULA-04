import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";

export default async function Dashboard() {
    const users = getUsers()
    return (
        <div>
              <Suspense fallback={<p>carregador...</p>}/>
                <ListUsers user={users}/>
             <Suspense/>
         
        </div>
    );
};