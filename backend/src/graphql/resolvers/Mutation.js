import Message from '../../models/Message';


const Mutation ={

    createMessage:async (_,{titulo,contenido,autor})=>{

        const newMessage = new Message({titulo,contenido,autor});

       return await newMessage.save();

    }

};

export default Mutation;