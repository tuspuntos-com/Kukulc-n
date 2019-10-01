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
const notificationsSchema = new Schema({
​
    newPositions:{
        type:String,
        required: true 
      },
      profileView:{
        type:String,
        
      },
      
      idUser:{
        type:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }]        
      }
      
},{timestamps: true});
    const notifications = mongoose.model('notifications', notificationsSchema);
    module.exports = { notifications };