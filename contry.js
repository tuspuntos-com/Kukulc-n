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
const ContrySchema = new Schema({
    contryName: {
     type: String,
     required: true
   },
   continentIdRef:
    {
      type:{
        type: mongoose.Schema.Type.ObjectId,
        ref:'Continent'
      }
    }

 }, {timestamps: true});
 const Contry = mongoose.model('Contry', ContrySchema);
 module.exports = { Contry };