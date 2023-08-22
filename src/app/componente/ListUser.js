export default async function ListUser({users}) {
    await new Promise((resolve) => setTimeout(resolve,500));
    return(
        <div>
         {users?.map ((user, index) =>
               <p key={index}> 
               {user.name}
               </p>
         )}
      
        
        </div>
    )
};