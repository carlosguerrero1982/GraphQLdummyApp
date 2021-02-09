import React,{useState} from "react";
import {gql} from 'apollo-boost';
import {useMutation} from '@apollo/react-hooks';
import { useHistory } from "react-router-dom";

const CREATE_MESSAGE = gql`

   mutation createMessage($titulo:String!,$contenido:String!,$autor:String! ){
    createMessage(titulo:$titulo,contenido:$contenido,autor:$autor){
      autor
      contenido
      titulo
    }
  }

`;

 const MessageForm=()=>{

   const [createMessage] = useMutation(CREATE_MESSAGE);

   const [contenido, setContenido] = useState('');
   const [titulo,setTitulo] = useState('');
   const [autor, setAutor] = useState('');
   
   const history = useHistory();


   return(

      <div className="row col-6 offset-md-4">
         <div className="card-body">

            <form onSubmit={e=>{
               e.preventDefault();
               createMessage({variables:{titulo,autor,contenido}})
               history.push('/');
            }}>

               <div className="form-group">
                  <input value={autor} onChange={(e)=>setAutor(e.target.value)} className="form-control" type="text" name="" id="" placeholder="Autor"/>
               </div>

               <div className="form-group">
                  <input value={titulo}  onChange={(e)=>setTitulo(e.target.value)} className="form-control" type="text" name="" id="" placeholder="Mensaje"/>
               </div>

               <div className="form-group">
                  <textarea  value={contenido} onChange={(e)=>setContenido(e.target.value)} className="form-control" placeholder="Contenido" rows="3"></textarea>
               </div>

               <button className="btn btn-success btn-block">SAVE</button>

            </form>
         </div>
      </div>
   )
 }

 export default MessageForm;