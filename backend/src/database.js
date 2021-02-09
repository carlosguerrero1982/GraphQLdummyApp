import mongoose from 'mongoose';

export function connect(){
mongoose.connect("mongodb://localhost:27017/graphql",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(db=>console.log("conectado"))
.catch(e=>console.log(e.message));
}