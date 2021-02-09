import Message from '../../models/Message';


const Query= {

    ping(){
        return "pong";
    },
    messages: async()=>{
        return await Message.find();
        
    },
    message:(_,args)=>{
       return Message.findById(args.id);
    }
};


export default Query;