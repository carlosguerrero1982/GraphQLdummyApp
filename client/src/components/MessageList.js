import React from "react";
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

const getMessages = gql`

{
  messages{
    _id
    contenido
    autor
    titulo

}

}

`;

 const MessageList=()=>{

  const {loading,error,data} = useQuery(getMessages)

  if(loading) return <h2>loading...</h2>
  if(error){ return <h2>error...</h2> }

  console.log(data);

   return (

      <div className="row">

         <div className="col md-6 offset-md-3">
         {
            data.messages.map(({_id,titulo,contenido,autor})=>(

               <div key={_id}  className="card m-2">
                  <div className="card-body">
                  
                     <h4>{titulo}</h4>
                     <p>{contenido}</p>
                     <p>{autor}</p>
                  </div>

               </div>

            ))
         }
         </div>

      </div>

   )

 }
 export default MessageList;