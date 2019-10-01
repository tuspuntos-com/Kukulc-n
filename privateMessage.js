const Schema = mongoose.Schema;
const mongoose = require('mongoose');
const URL_MONGO = 'mongodb+srv://RubenCompan:Rubencl5@rubencluster-8q10h.mongodb.net/test';
mongoose.connect(
 URL_MONGO,
 {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true
 },
 (error) => {
   if (error) console.log(error);
   if (!error) console.log('Conexion exitosa');
 }
);
const privateMessageSchema = new Schema({
​
    recruiterName:{
        type:String,
        required: true 
      },
      position:{
        type:String,
        required: true 
      },
      company:{
        type:String,
        required: true 
      },
      message:{
        type:String,
        required: true 
      },
      idUser:{
        type:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }]        
      }
      
},{timestamps: true});
    const privateMessage = mongoose.model('privateMessage', privateMessageSchema);
    module.exports = { privateMessage };