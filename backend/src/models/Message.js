import {Schema,model} from 'mongoose';

const messageSchema = new Schema({
    titulo:{
        type:String,
        required:true
    },
    contenido:{
        type:String,
        required:true
    },
    autor:{
        type:String,
        required:true
    }
});

export default model('Message', messageSchema);